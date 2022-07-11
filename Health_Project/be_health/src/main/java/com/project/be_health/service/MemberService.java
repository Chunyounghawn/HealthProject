package com.project.be_health.service;

import com.project.be_health.domain.Member;
import com.project.be_health.dto.member.MemberSaveRequestDto;
import com.project.be_health.dto.posts.PostsSaveRequestDto;
import com.project.be_health.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@RequiredArgsConstructor
@Service
public class MemberService {
    private final MemberRepository memberRepository;

    public Long save(MemberSaveRequestDto requestDto) {
        Member member = requestDto.toEntity();
        memberRepository.save(member);
        return member.getId();
    }
}
