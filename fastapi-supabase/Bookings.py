from typing import Optional, List
from pydantic import BaseModel
from datetime import datetime

class Bookings(BaseModel): #no RLS
    name : str
    email : str
    phone: Optional[str] = None
    location_of_shoot: str  
    message: str
    date: str
    Owner_Id: Optional[int] = 1 #foreign key to public db table status, default 1