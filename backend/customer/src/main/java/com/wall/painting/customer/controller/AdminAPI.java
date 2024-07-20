package com.wall.painting.customer.controller;

import com.wall.painting.customer.model.Admin;
import com.wall.painting.customer.repository.AdminREPO;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import org.hibernate.sql.Update;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.StreamingHttpOutputMessage;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping
public class AdminAPI {
    @Autowired
    private AdminREPO adminREPO;

    @PostMapping("add/admin")
    public ResponseEntity<?> addAdmin(@RequestBody Admin admin) {
        try {
            Admin admin1 = adminREPO.save(admin);
            return new ResponseEntity<>(admin1, HttpStatus.OK);
        } catch (Exception exception) {
            return new ResponseEntity<>("something went wrong", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("all/admin")
    public ResponseEntity<?> get(){
        try {
            List<Admin> adminList = adminREPO.findAll();
        if (adminList.isEmpty()){
            return new ResponseEntity<>(" admin is not found",HttpStatus.NOT_FOUND);
        }else {
            return new ResponseEntity<>(adminList,HttpStatus.OK);
        }

        }catch (Exception exception){
            return new ResponseEntity<>("something went wrong",HttpStatus.BAD_REQUEST);
        }
    }
    @DeleteMapping("Delete/admin{a_id}")
    public  ResponseEntity<?> deleteAdmin(@PathVariable int a_id){
        try {
            adminREPO.deleteById(a_id);
            return new ResponseEntity<>("customer delete succesfully",HttpStatus.OK);
        }
       catch (Exception exception){
            return new ResponseEntity<>("something went wrong",HttpStatus.BAD_REQUEST);
       }
    }
    @PutMapping("Update/admin{a_id}")
public ResponseEntity<?> updateAdmin(@PathVariable int a_id,@RequestBody Admin updateAdmin){
        Optional<Admin> adminOptional =adminREPO.findById(a_id);
        if(adminOptional.isPresent()){
            Admin admin = adminOptional.get();
            admin.setA_id(updateAdmin.getA_id());
            admin.setA_name(updateAdmin.getA_name());
            admin.setA_password(updateAdmin.getA_password());
            adminREPO.save(admin);
            return new ResponseEntity<>(admin,HttpStatus.OK);
        }else {
            return new ResponseEntity<>("admin is not found",HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("getadmin{a_id}")
    public ResponseEntity<?> geta_id(@PathVariable int a_id){
        try {
            Optional<Admin> optionalAdmin = adminREPO.findById(a_id);
            if (optionalAdmin.isPresent()){
                return  new ResponseEntity<>(optionalAdmin,HttpStatus.OK);
            }else {
                return new ResponseEntity<>("admin is not found",HttpStatus.NOT_FOUND);
            }
        }catch (Exception exception){
            return new ResponseEntity<>("something went wrong",HttpStatus.BAD_REQUEST);
        }
    }
}
