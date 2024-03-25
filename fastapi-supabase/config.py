from fastapi import HTTPException, status
import os
from dotenv import load_dotenv

from pathlib import Path
env_path = Path('.') / '.env'
load_dotenv(dotenv_path=env_path)

class Settings:
    SUPABASE_URL = os.getenv("URL")
    SUPABASE_ANON_KEY = os.getenv("API")
    STRIPE_SECRET_KEY = os.getenv("STRIPE_SECRET_KEY")  

settings = Settings()
