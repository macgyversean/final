from sqlalchemy import Column, Integer, String, Text, ForeignKey
from pydantic import BaseModel
from db import engine 
from models.Base import Base

class USER(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True,)
    email = Column(String)
    password = Column(Text)

class CEOSchema(BaseModel):
    id: int
    email: str
    password: str

class Config:
    populate_by_name = True

Base.metadata.create_all(engine)
