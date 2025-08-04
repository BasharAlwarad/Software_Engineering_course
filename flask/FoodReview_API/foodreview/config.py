import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()


class BaseConfig:
    # Get database URI from environment variable or .env file
    PG_URI = os.getenv('PG_URI')

    if not PG_URI:
        raise ValueError(
            "PG_URI environment variable is required! "
            "Please set it in .env file or as environment variable. "
            "Example: PG_URI=postgresql://user:password@host:port/database"
        )
