# OTP API

OTP API is a simple RESTful API that generates and verifies one-time passwords (OTPs) using the Speakeasy library's secret key method.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install and run the OTP API on your local machine, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your_username/otp-api.git
    ```

2. Navigate to the project directory:
    ```bash
    cd otp-api
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the server:
    ```bash
    npm start
    ```

## Usage

To use the OTP API, send HTTP requests to the specified endpoints. The API currently supports two endpoints:

- `/generate-otp` (GET request): Generates a new OTP and returns it in JSON format.

- `/verify-otp` (POST request): Verifies the OTP provided in the request body using the Speakeasy secret key method.

For detailed usage examples and request/response formats, refer to the [Endpoints](#endpoints) section below.

## Endpoints

### Generate OTP
- **URL:** `/generate-otp`
- **Method:** GET
- **Description:** Generates a new OTP and returns it in JSON format.
- **Request Parameters:** None
- **Example Response:**
    ```json
    {
      "otp": "123456"
    }
    ```

### Verify OTP
- **URL:** `/verify-otp`
- **Method:** POST
- **Description:** Verifies the OTP provided in the request body using the Speakeasy secret key method.
- **Request Body:**
    ```json
    {
      "otp": "123456"
    }
    ```
- **Example Response:**
    ```json
    {
      "valid": true
    }
    ```

## Future Enhancements

In the future, we plan to add user-based OTP generation and storage in an ORM type database. This will allow for more robust authentication mechanisms and user-specific OTP management.

## Contributing

Contributions are welcome! If you have any ideas for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
