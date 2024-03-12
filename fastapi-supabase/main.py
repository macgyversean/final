from fastapi import FastAPI
from typing import Union
from uuid import uuid4
import bcrypt
from fastapi import FastAPI
from app.models import User
from db.supabase import create_supabase_client

app = FastAPI()

# Initialize supabase client
supabase = create_supabase_client()



import bcrypt
from fastapi import FastAPI
from app.models import User
from db.supabase import create_supabase_client

app = FastAPI()
# def user_exists(key: str = "email", value: str = None):
#     user = supabase.from_("users").select("*").eq(key, value).execute()
#     return len(user.data) > 0

@app.get("/")
def get_users():
    data = supabase.auth.get_user()
    return data


@app.post("/register")
def create_user(email: str, password: str):
    res = supabase.auth.sign_up({
  "email": email,
  "password": password
    })
    return res

@app.post("/login")
def login_user(email: str, password: str):
    res = supabase.auth.sign_in_with_password({
  "email": email,
  "password": password
    })
    return res

# @app.post("/register user", response_model=User)
# def create_user(name: str, email: str, password: str):
#     auth_token = str(uuid4())
#     response = supabase.auth.sign_up({
#         "email": email,
#         "password": password,
#         "options":{
#             "data": {
#                 "display_name": name
#             }
#         }
#     })
#     return User(auth_token=auth_token, name=name, email=email, password=password)


# def user_exists(key: str = "email", value: str = None):
#     user = supabase.from_("users").select("*").eq(key, value).execute()
#     return len(user.data) > 0

# Create a new user

# # Create a new user
# @app.post("/user")
# def create_user(user: User):
#     try:
#         # Convert email to lowercase
#         user_email = user.email.lower()
#         # Hash password
#         hased_password = bcrypt.hashpw(user.password.encode(), bcrypt.gensalt()).decode()

#         # Check if user already exists
#         if user_exists(value=user_email):
#             return {"message": "User already exists"}

#         # Add user to users table
#         user = supabase.from_("users")\
#             .insert({"email": user_email, "password": hased_password, "name": user.name})\
#             .execute()

#         # Check if user was added
#         if user:
#             return {"message": "User created successfully"}
#         else:
#             return {"message": "User creation failed"}
#     except Exception as e:
#         print("Error: ", e)
#         return {"message": "User creation failed"}
    
# @app.get("/getuser")
# def get_user(user_id: Union[str, None] = None):
#     try:
#         if user_id:
#             user = supabase.from_("users")\
#                 .select("id", "name", "email")\
#                 .eq("id", user_id)\
#                 .execute()
            
#             if user:
#                 return user
#         else:
#             users = supabase.from_("users")\
#                 .select("id", "email", "name")\
#                 .execute()
#             if users:
#                 return users
#     except Exception as e:
#         print(f"Error: {e}")
#         return {"message": "User not found"}


# # Update a user
# @app.put("/update user email/name")
# def update_user(user_id: str, email: str, name: str):
#     try:
#         user_email = email.lower()

#         # Check if user exists
#         if user_exists("id", user_id):
#             # Check if email already exists
#             email_exists = supabase.from_("users")\
#                 .select("*").eq("email", user_email)\
#                 .execute()
#             if len(email_exists.data) > 0:
#                 return {"message": "Email already exists"}

#             # Update user
#             user = supabase.from_("users")\
#                 .update({"name": name, "email": user_email})\
#                 .eq("id", user_id).execute()
#             if user:
#                 return {"message": "User updated successfully"}
#         else:
#             return {"message": "User update failed"}
#     except Exception as e:
#         print(f"Error: {e}")
#         return {"message": "User update failed"}

# # Delete a user
# @app.delete("/deleteuser")
# def delete_user(user_id: str):
#     try:        
#         # Check if user exists
#         if user_exists("id", user_id):
#             # Delete user
#             supabase.from_("users")\
#                 .delete().eq("id", user_id)\
#                 .execute()
#             return {"message": "User deleted successfully"}
        
#         else:
#             return {"message": "User deletion failed"}
#     except Exception as e:
#         print(f"Error: {e}")
#         return {"message": "User deletion failed"}

