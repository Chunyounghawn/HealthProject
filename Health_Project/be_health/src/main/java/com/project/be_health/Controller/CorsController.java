package com.project.be_health.Controller;

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
    public String test(HttpServletRequest req) throws Exception{
        System.out.println("res");
        //response Data
        ArrayList<HashMap<String, Object>> rtnArray = new ArrayList<HashMap<String, Object>>();
        HashMap<String, Object> rtnMap = new HashMap<String, Object>();

        rtnMap.put("requestData1", req.getParameter("user_id"));
        rtnMap.put("requestData2", req.getParameter("user_pw"));
        rtnArray.add(rtnMap);
        System.out.println(rtnArray);

        String succes="su";
        String fail="fa";

        if(rtnMap.get("requestData1").equals("testID")){
            System.out.println("테스트아이디 확인성공");
            return "TestLoginTrue";
        }else{
            return "TestLoginFalse";
        }

        //return rtnArray;
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