from pydantic import BaseModel, UUID4

class User(BaseModel):
    email: str
    password: str
    name: str
    auth_token: UUID4