package com.project.be_health.repository;

import com.project.be_health.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    /* Security */
    Optional<Member> findByUsername(String username);

    /* OAuth */
    Optional<Member> findByEmail(String email);

    /* user GET */
    Member findByNickname(String nickname);

    /* 중복 검사> 중복인 경우 true, 중복되지 않은경우 false 리턴 */
    boolean existsByUsername(String username);
    boolean existsByNickname(String nickname);
    boolean existsByEmail(String email);
}

