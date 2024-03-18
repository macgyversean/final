from typing import Optional, List
from pydantic import BaseModel
from datetime import datetime

class Bookings(BaseModel): #no RLS
    name : str
    email : str
    phone: str
    location_of_shoot: str  
    message: str
    date: str
    Owner_ID: str