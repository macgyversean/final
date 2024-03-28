from fastapi import FastAPI
from typing import Union
from uuid import uuid4
from fastapi import FastAPI 
from fastapi.middleware.cors import CORSMiddleware 
from app.models import User
from db.supabase import create_supabase_client
import bcrypt
import stripe
import os
from config import settings
from fastapi import FastAPI
from app.models import User
from db.supabase import create_supabase_client
from Bookings import Bookings


stripe.api_key = settings.STRIPE_SECRET_KEY
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
    "https://seanexperience.netlify.app",
    "https://seanexperience.netlify.app/login"
    
]

app.add_middleware(
    CORSMiddleware, 
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)




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

@app.post("/Bookings1")
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

@app.post("/Bookings2")
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

@app.post("/Bookings3")
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

# @app.get("/mybookings")
# def get_bookings():
#     user_response = supabase.auth.get_user()
#     response = supabase.table('Bookings').select("*").eq("Owner_ID",user_response.user.id).execute()
#     return response

@app.post("/create-checkout-session")
def create_checkout_session():
    session = stripe.checkout.Session.create(
        payment_method_types=['card'],
        ui_mode='embedded',
        line_items=[
            {
                'price' : 'price_1OyGLKDOd26wYEUA3quaTLGE',
                'quantity': 1,
            },
        ],
        mode='payment',
        return_url="http://localhost:5173/"
    )
    return session

@app.post("/create-checkout-session1")
def create_checkout_session():
    session = stripe.checkout.Session.create(
        payment_method_types=['card'],
        ui_mode='embedded',
        line_items=[
            {
                'price' : 'price_1OyDsLDOd26wYEUAJFMRUvtC',
                'quantity': 1,
            },
        ],
        mode='payment',
        return_url="http://localhost:5173/"
    )
    return session

@app.post("/create-checkout-session2")
def create_checkout_session():
    session = stripe.checkout.Session.create(
        payment_method_types=['card'],
        ui_mode='embedded',
        line_items=[
            {
                'price' : 'price_1OyGLsDOd26wYEUAuqEVtcVl',
                'quantity': 1,
            },
        ],
        mode='payment',
        return_url="http://localhost:5173/"
    )
    return session

@app.get('/session-status')
def session_status(request):
  session = stripe.checkout.Session.retrieve(request.args.get('session_id'))

  return session


