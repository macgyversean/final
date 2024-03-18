from fastapi import FastAPI
from typing import Union
from uuid import uuid4
import bcrypt
from fastapi import FastAPI 
from fastapi.middleware.cors import CORSMiddleware 
from app.models import User
from db.supabase import create_supabase_client
import bcrypt
from fastapi import FastAPI
from app.models import User
from db.supabase import create_supabase_client
from Bookings import Bookings

app = FastAPI()

# Initialize supabase client
supabase = create_supabase_client()

origins = [
    "http://localhost:8000",
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:5175",
    
]

app.add_middleware(
    CORSMiddleware, 
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)



# def user_exists(key: str = "email", value: str = None):
#     user = supabase.from_("users").select("*").eq(key, value).execute()
#     return len(user.data) > 0

@app.get("/")
def get_users():
    data = supabase.auth.get_user()
    return data


@app.post("/register")
def create_user(request: User):
    res = supabase.auth.sign_up({
  "email": request.email,
  "password": request.password
    })
    return res

@app.post("/login")
def login_user(request: User):
    print(request)
    res = supabase.auth.sign_in_with_password({
            "email": request.email,
            "password": request.password
    })
    return res

@app.post("/logout")
def logout_user():
    response = supabase.auth.sign_out()
    return "success"

@app.post("/Bookings")
async def add_booking(request: Bookings):
    res = supabase.table('Bookings').insert({
        "name": request.name,
        "email": request.email,
        "phone": request.phone,
        "location_of_shoot": request.location_of_shoot,
        "message": request.message,
        "date": request.date,
        "Owner_ID": request.Owner_ID
    }).execute()
    return res

@app.get("/mybookings")
def get_bookings():
    response = supabase.table('Bookings').select("*").execute()
    return response