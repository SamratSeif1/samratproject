package com.wall.painting.customer.controller;

import com.wall.painting.customer.model.Painter;
import com.wall.painting.customer.repository.PainterREPO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping
public class PainterAPI {
    @Autowired
    private PainterREPO painterREPO;

    @PostMapping("add/painter")
    public ResponseEntity<?> addPainter(@RequestBody Painter painter) {
        try {
            Painter painter1 = painterREPO.save(painter);
            return new ResponseEntity<>(painter1, HttpStatus.OK);

        } catch (Exception exception) {
            return new ResponseEntity<>("something went wrong", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("all/painter")
    public ResponseEntity<?> get() {
        try {
            List<Painter> painterList = painterREPO.findAll();
            if (painterList.isEmpty()) {
                return new ResponseEntity<>("painter is not found", HttpStatus.NOT_FOUND);

            } else {
                return new ResponseEntity<>(painterList, HttpStatus.OK);
            }
        } catch (Exception exception) {
            return new ResponseEntity<>("something went wrong", HttpStatus.BAD_REQUEST);
        }
    }

   @PutMapping("update/painter{P_id}")
    public ResponseEntity<?> updatePainter(@PathVariable int P_id, @RequestBody Painter updatePainter) {
       Optional<Painter> painterOptional = painterREPO.findById(P_id);
       if (painterOptional.isPresent()) {
           Painter painter = painterOptional.get();
           painter.setP_id(updatePainter.getP_id());
           painter.setP_name(updatePainter.getP_name());
           painterREPO.save(painter);
           return new ResponseEntity<>(painter, HttpStatus.OK);
       } else {
           return new ResponseEntity<>("painter is not found", HttpStatus.NOT_FOUND);
       }
   }
   @DeleteMapping("Delete/painter{P_id}")
        public ResponseEntity<?> deletePainter(@PathVariable int P_id){
            try {
                painterREPO.deleteById(P_id);
                return new ResponseEntity<>("painter delete succesfully",HttpStatus.OK);
            }
        catch (Exception exception){
                return new ResponseEntity<>("something went wrong",HttpStatus.BAD_REQUEST);
       }
   }
   @GetMapping("getPainter{P_id}")
    public ResponseEntity<?> get_id(@PathVariable int P_id){
        try {
            Optional<Painter> optionalPainter = painterREPO.findById(P_id);
         if (optionalPainter.isPresent()){
             return new ResponseEntity<>(optionalPainter,HttpStatus.OK);
         }else {
             return new ResponseEntity<>("painter is no found",HttpStatus.NOT_FOUND);
         }
        }catch (Exception exception){
            return new ResponseEntity<>("something went wrong",HttpStatus.BAD_REQUEST);
        }
   }
}