document.addEventListener('DOMContentLoaded', function() {
    // 현재 페이지에 해당하는 네비게이션 링크에 active 클래스 추가
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('.nav ul li a');
    
    menuItems.forEach(item => {
        if (item.href === currentLocation) {
            item.classList.add('active');
        }
    });
    
    // 폼 제출 시 알림 (실제 백엔드 연동 전)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('예약이 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
            form.reset();
        });
    });
    
    // 간단한 애니메이션 효과 (선택 사항)
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // 애니메이션이 필요한 요소들 선택
    const animateElements = document.querySelectorAll('.feature-card, .staff-member, .facility, .service-item, .about-text, .about-image');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});