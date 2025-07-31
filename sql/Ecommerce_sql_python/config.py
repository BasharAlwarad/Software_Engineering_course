# Database Configuration for Neon PostgreSQL
# ===========================================

# Neon Database Connection String
# This connects to your Neon PostgreSQL database
DATABASE_URL = "postgresql://neondb_owner:npg_46gcwfbKjlae@ep-snowy-sound-ad5dftxm-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"

# You can also break down the connection into components:
DB_HOST = "ep-snowy-sound-ad5dftxm-pooler.c-2.us-east-1.aws.neon.tech"
DB_NAME = "neondb"
DB_USER = "neondb_owner"
DB_PASSWORD = "npg_46gcwfbKjlae"
DB_PORT = "5432"

# SSL settings for Neon (required)
SSL_MODE = "require"
CHANNEL_BINDING = "require"
