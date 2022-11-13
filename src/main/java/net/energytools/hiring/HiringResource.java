package net.energytools.hiring;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping(value = "/api/hiring", produces = MediaType.APPLICATION_JSON_VALUE)
public class HiringResource {

    private int counter = 0;
    private final Logger log = LoggerFactory.getLogger(this.getClass());

    @RequestMapping(value = "/counter", method = RequestMethod.GET)
    public ResponseEntity<CounterDTO> getCounter(HttpServletRequest request) {
        String requestType = request.getHeader("X-Request-Type");
        if (requestType != null && requestType.toLowerCase().equals("a")) {
            log.info("Request of type A {}", counter);
            try {
                counter += 1;
                return ResponseEntity.ok(new CounterDTO(counter));
            } catch (Exception e) {}
        } else if (requestType != null && requestType.toLowerCase().equals("b")) {
            log.info("Request of type B {}", counter);
            try {
                counter += 1;
                return ResponseEntity.ok(new CounterDTO(counter));
            } catch (Exception e) {}
        } else if (requestType != null && requestType.toLowerCase().equals("c")) {
            log.info("Request of type C {}", counter);
            try {
                counter += 1;
                return ResponseEntity.ok(new CounterDTO(counter));
            } catch (Exception e) {}
        }else {
            log.info("Other type of request {}", counter);
            return ResponseEntity.ok(new CounterDTO(counter));
        }

        return null;
    }

}
