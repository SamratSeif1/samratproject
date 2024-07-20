package com.wall.painting.customer.controller;

import com.wall.painting.customer.model.Customer;
import com.wall.painting.customer.repository.CustomerREPO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/Customer")
public class CustomerAPI {
    @Autowired
    private CustomerREPO customerREPO;

    @PostMapping("/add")
    public ResponseEntity<?> addCustomer(@RequestBody Customer customer) {
        try {
            Customer savedCustomer = customerREPO.save(customer);
            return new ResponseEntity<>(savedCustomer, HttpStatus.OK);
        } catch (Exception exception) {
            return new ResponseEntity<>("Something went wrong", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllCustomers() {
        try {
            List<Customer> customerList = customerREPO.findAll();
            if (customerList.isEmpty()) {
                return new ResponseEntity<>("Customers not found", HttpStatus.NOT_FOUND);
            } else {
                return new ResponseEntity<>(customerList, HttpStatus.OK);
            }
        } catch (Exception exception) {
            return new ResponseEntity<>("Something went wrong", HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateCustomer(@PathVariable int id, @RequestBody Customer updateCustomer) {
        Optional<Customer> customerOptional = customerREPO.findById(id);
        if (customerOptional.isPresent()) {
            Customer customer = customerOptional.get();
            customer.setName(updateCustomer.getName());
            customer.setPhoneNumber(updateCustomer.getPhoneNumber());
            customer.setEmail(updateCustomer.getEmail());
            customer.setPassword(updateCustomer.getPassword());
            customerREPO.save(customer); // Save the updated customer
            return new ResponseEntity<>(customer, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Customer not found", HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCustomer(@PathVariable int id) {
        try {
            customerREPO.deleteById(id);
            return new ResponseEntity<>("Customer deleted successfully", HttpStatus.OK);
        } catch (Exception exception) {
            return new ResponseEntity<>("Something went wrong", HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginCustomer(@RequestBody Customer loginRequest) {
        Optional<Customer> customerOptional = customerREPO.findByEmail(loginRequest.getEmail());
        if (customerOptional.isPresent()) {
            Customer customer = customerOptional.get();
            if (customer.getPassword().equals(loginRequest.getPassword())) {
                return new ResponseEntity<>(customer, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Invalid password", HttpStatus.UNAUTHORIZED);
            }
        } else {
            return new ResponseEntity<>("Customer not found", HttpStatus.NOT_FOUND);
        }
    }
}
