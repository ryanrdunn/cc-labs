from pymongo import MongoClient
from pprint import pprint

server = 'add mongo conn'
conn = MongoClient(server)

col_films = conn.MiniFilms.films
# pprint(col_films.find_one())

col_users = conn.MiniFilms.users

# print(col_users)

user2 = {
    "user_name":"Jane Williams",
    "user_age": 50,
    "user_location": "London"
}
user3 = {
    "user_name":"Kate Johnson",
    "user_age": 35,
    "user_location": "Brighton"
}

# col_users.insert_many([user2, user3])
# for record in col_users.find():
#     pprint(record)

# results = col_users.find().sort("user_age", -1)
# for user in results:
 #    pprint(user)

# results = col_users.find({"user_age": {"$gt":45}},{})
results = col_users.find({"user_location": {"$eq":"London"}})
for user in results:
    pprint(user)
