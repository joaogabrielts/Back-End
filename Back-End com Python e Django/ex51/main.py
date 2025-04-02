class InvalidAgeError(Exception):
    def __init__(self, message):
        self.message = message


def validate_age(age):
    if age < 0:
        raise InvalidAgeError("Age must be positive")


try:
    validate_age(-5)
except InvalidAgeError as err:
    print(err.message)  # "Age must be positive"
