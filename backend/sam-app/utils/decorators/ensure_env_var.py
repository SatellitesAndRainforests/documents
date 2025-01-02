import os
from functools import wraps

class MissingEnvironmentVariableException(Exception):
    """Custom exception for missing environment variables."""
    def __init__(self, missing_vars):
        self.missing_vars = missing_vars
        super().__init__(f"Missing environment variables: {', '.join(missing_vars)}")


def ensure_environment_variables(names):
    """
    Decorator to ensure specified environment variables are set.

    :param names: List of required environment variable names.
    """
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            missing_vars = [name for name in names if not os.getenv(name)]
            if missing_vars:
                raise MissingEnvironmentVariableException(missing_vars)
            return func(*args, **kwargs)
        return wrapper
    return decorator

