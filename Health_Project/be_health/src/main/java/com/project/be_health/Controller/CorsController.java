package com.project.be_health.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;

@RestController
public class CorsController {



    @GetMapping(value = {"", "/"})
    public String index() {
        System.out.println("index");
        return "index";
    }

    @GetMapping(value = "/not-cors")
    public String notCors() {
        System.out.println("not-cors");
        return "notCorsss";
    }

    @CrossOrigin("http://localhost:3000")
    @GetMapping(value = "/cors")
    public String cors() {
        System.out.println("cors");
        return "corsss";
    }




    @CrossOrigin("http://localhost:3000")
    @PostMapping("/test")
    public ArrayList<HashMap<String, Object>> test(HttpServletRequest req) throws Exception{

        //response Data
        ArrayList<HashMap<String, Object>> rtnArray = new ArrayList<HashMap<String, Object>>();
        HashMap<String, Object> rtnMap = new HashMap<String, Object>();

        rtnMap.put("requestData1", req.getParameter("name"));
        rtnMap.put("requestData2", req.getParameter("food"));
        rtnArray.add(rtnMap);
        System.out.println(rtnArray);

        return rtnArray;
    }

    @PostMapping(value = "/test2")
    public ArrayList<HashMap<String, Object>> test2(HttpServletRequest req) throws Exception{

        //response Data
        ArrayList<HashMap<String, Object>> rtnArray2 = new ArrayList<HashMap<String, Object>>();
        HashMap<String, Object> rtnMap = new HashMap<String, Object>();

        rtnMap.put("requestData1", req.getParameter("name"));
        rtnMap.put("requestData2", req.getParameter("food"));
        rtnArray2.add(rtnMap);
        System.out.println(rtnArray2);

        return rtnArray2;
    }


    @GetMapping(value = "/not-proxy")
    public String notProxy() {
        System.out.println("not-proxy");
        return "notProxyyy";
    }

    @GetMapping(value = "/proxy")
    public String proxy() {
        System.out.println("proxy");
        return "proxyyy";
    }
}