const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');


// Create 2 functions: createUser, createCompany that return an object with the properties listed above

const user = () => ({
    id: faker.database.mongodbObjectId(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(),
    password: faker.internet.password(14)
});

const company = () => ({
    id: faker.database.mongodbObjectId(),
    companyName: faker.company.name(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.stateAbbr(),
        zipCode: faker.address.zipCodeByState()
    }
});


// Create an api route "/api/users/new" that returns a new user

app.get("/api/users/new", (req, res) => {
    res.json(user());
});


// Create an api route "/api/companies/new" that returns a new company

app.get("/api/companies/new", (req, res) => {
    res.json(company());
});


// Create an api route "/api/user/company" that returns both a new user and a new company

app.get("/api/user/company", (req, res) => {
    res.json({user: user(), company: company()});
})


app.listen(port, () => console.log(`Listening on port: ${port}`));
