from flask import Flask, jsonify, request
from flask_cors import CORS
from supabase import create_client
import math

app = Flask(__name__)
CORS(app)


url = "https://tchwwnlazebhayosesvf.supabase.co"
key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjaHd3bmxhemViaGF5b3Nlc3ZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0MDEwMTIsImV4cCI6MjA1ODk3NzAxMn0.wztsNJdzWyK6wOte077OP-bSrx_89Bq0a4-UsjDuxf0"

supabase = create_client(url, key)
@app.route('/api/species-locations', methods=['GET'])
def get_species_locations():
    all_data = []
    batch_size = 1000
    offset = 0

    while True:
        response = supabase \
            .table("species_locations") \
            .select("*") \
            .range(offset, offset + batch_size - 1) \
            .execute()
        
        batch = response.data

        if not batch:
            break  
        
        all_data.extend(batch)

        if len(batch) < batch_size:
            break  
        offset += batch_size

    return jsonify(all_data)


# Haversine 
def haversine(lat1, lon1, lat2, lon2):
    R = 6371  
    phi1 = math.radians(lat1)
    phi2 = math.radians(lat2)
    dphi = math.radians(lat2 - lat1)
    dlambda = math.radians(lon2 - lon1)

    a = math.sin(dphi / 2)**2 + \
        math.cos(phi1) * math.cos(phi2) * math.sin(dlambda / 2)**2

    return R * 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))

# Step 1:
def get_all_species_locations():
    all_data = []
    batch_size = 1000
    offset = 0

    while True:
        response = supabase \
            .table("species_locations") \
            .select("*") \
            .range(offset, offset + batch_size - 1) \
            .execute()

        batch = response.data

        if not batch:
            break

        all_data.extend(batch)

        if len(batch) < batch_size:
            break  #

        offset += batch_size

    return all_data

@app.route('/api/species-locations/filter', methods=['GET'])
def filter_species_locations():
    species_name = request.args.get('name')
    postcode = request.args.get('postcode')

    filtered_results = []

    # Step 1:  species_locations
    all_locations = get_all_species_locations()

    # Step 2: 
    if species_name:
        all_locations = [item for item in all_locations if item['name'].lower() == species_name.lower()]

    # Step 3: 
    if postcode:
        postcode = str(postcode).strip().replace('"', '').replace("'", '')
        suburb_response = supabase \
            .table("suburb_locations") \
            .select("lat, long") \
            .eq("postcode", postcode) \
            .limit(1) \
            .execute()
        if suburb_response.data:
            center_lat = suburb_response.data[0]['lat']
            center_lon = suburb_response.data[0]['long']
            print(center_lat)
            # 
            all_locations = [
                loc for loc in all_locations
                if haversine(center_lat, center_lon, loc['lat'], loc['long']) <= 20
            ]

    return jsonify(all_locations)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)





