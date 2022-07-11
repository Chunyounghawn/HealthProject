package com.project.be_health.controller;

import com.project.be_health.dto.member.MemberSaveRequestDto;
import com.project.be_health.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("auth")
public class UserController {
    private final MemberService memberService;

    @GetMapping("/user")
    public String testControllerRequestBody(@RequestBody MemberSaveRequestDto memberSaveRequestDto){
        return memberSaveRequestDto.getUserId();
    }

    @PostMapping("/user/join")
    @ResponseStatus(HttpStatus.OK)
    public Long save(@RequestBody MemberSaveRequestDto requestDto) throws Exception{
        System.out.println("requestDto = " + requestDto.getUserId());
        return memberService.save(requestDto);
    }
}
