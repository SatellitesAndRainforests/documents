import pytest
from utils.decorators.ensure_env_var import ensure_environment_variables, MissingEnvironmentVariableException

@ensure_environment_variables(names=["TEST_ENV"])
def validate_env_function():
    return "Success!"

def test_ensure_environment_variables_pass(monkeypatch):
    # Use monkeypatch to temporarily set the environment variable
    monkeypatch.setenv("TEST_ENV", "value")
    assert validate_env_function() == "Success!"

def test_ensure_environment_variables_fail(monkeypatch):
    # Use monkeypatch to temporarily unset the environment variable
    monkeypatch.delenv("TEST_ENV", raising=False)

    with pytest.raises(MissingEnvironmentVariableException) as exc_info:
        validate_env_function()

    assert "TEST_ENV" in str(exc_info.value)

