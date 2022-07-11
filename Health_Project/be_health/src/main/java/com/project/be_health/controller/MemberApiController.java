//package com.project.be_health.controller;
//
//import com.project.be_health.dto.member.MemberRequestDto;
//import com.project.be_health.service.MemberService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RequiredArgsConstructor
//@RequestMapping("/api")
//@RestController
//public class MemberApiController {
//
//    private final MemberService memberService;
//
//    private final AuthenticationManager authenticationManager;
//
//    @PutMapping("/user")
//    public ResponseEntity<String> modify(@RequestBody MemberRequestDto dto) {
//        memberService.modify(dto);
//
//        /* 변경된 세션 등록 */
//        //Authentication authentication = authenticationManager.authenticate(
//          //      new MembernamePasswordAuthenticationToken(dto.getUsername(), dto.getPassword()));
//
//        //SecurityContextHolder.getContext().setAuthentication(authentication);
//
//        return new ResponseEntity<>("success", HttpStatus.OK);
//    }
//}