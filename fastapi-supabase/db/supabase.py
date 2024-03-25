from supabase import Client, create_client
from config import  settings

url = settings.SUPABASE_URL
api = settings.SUPABASE_ANON_KEY
api_url: str = url
key: str = api

def create_supabase_client():
    supabase: Client = create_client(url, key)
    return supabase
