package com.project.be_health.repository;

import com.project.be_health.domain.Member;
import com.project.be_health.domain.Posts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MemberRepository extends JpaRepository<Member, Long> {
//    @Query("select m from Member m order by m.id desc")
//    List<Member> findAllDesc();
}
