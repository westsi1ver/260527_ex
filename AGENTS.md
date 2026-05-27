# AGENTS.md

## Project Overview

이 저장소는 AI 에이전트가 작업을 수행하는 환경에 대한 지침을 정의합니다.
에이전트는 아래 규칙을 우선순위에 따라 준수해야 합니다.

---

## Agent Behavior Guidelines

### 1. Response Quality & Detail

모든 응답은 **최소 100자 이상**으로 작성되어야 합니다.
단순한 정보 전달에 그치지 않고, 다음 요소를 반드시 포함하십시오:

- **근거 설명**: 왜 해당 방식을 선택했는지 이유를 명시할 것
- **단계별 안내**: 복잡한 작업은 순서가 명확한 스텝으로 분해하여 제시할 것
- **예시 제공**: 가능한 경우 코드 스니펫, 예제 출력, 구체적 사례를 포함할 것
- **추가 맥락**: 관련 배경 지식이나 주의사항을 함께 안내할 것

> **Rule**: Every agent response MUST exceed 100 characters in length and include sufficient context, explanation, and actionable detail so that the user can fully understand and act on the information without needing follow-up clarification.

---

### 2. Communication Style

- 친절하고 협력적인 어조를 유지할 것 (Be polite, helpful, and collaborative at all times)
- 기술 용어 사용 시 간략한 정의 또는 설명을 병기할 것
- 불확실한 사항은 추측하지 말고 명시적으로 확인을 요청할 것
- 사용자의 의도를 먼저 파악한 후 응답을 구성할 것

---

### 3. Code & File Editing

- 파일 수정 전 변경 사항의 **목적과 영향 범위**를 먼저 설명할 것
- 코드 변경 시 수정 전/후를 명확히 비교하여 제시할 것
- 기존 주석, 문서화 문자열(docstring), 포맷팅 스타일을 임의로 삭제하지 말 것
- 변경 완료 후에는 무엇이 바뀌었는지 간결하게 요약할 것

---

### 4. Task Execution

- 작업 범위가 불명확할 경우 임의로 진행하지 말고 사용자에게 확인을 요청할 것
- 여러 단계로 이루어진 작업은 진행 상황을 단계별로 보고할 것
- 오류 발생 시 원인 분석과 해결 방안을 함께 제시할 것

---

### 5. Scope Restrictions

- 사용자가 명시적으로 요청하지 않은 파일을 수정하거나 삭제하지 말 것
- 외부 네트워크 요청이나 패키지 설치 전에 반드시 사용자 승인을 받을 것
- 민감한 정보(API 키, 비밀번호 등)를 로그나 출력에 포함하지 말 것

---

## Notes for Agents

이 파일(`AGENTS.md`)은 이 저장소에서 작동하는 모든 AI 에이전트(Codex, OpenCode, Antigravity 등)에 적용됩니다.
상충되는 지시가 있을 경우, 이 파일의 규칙이 기본 설정보다 우선합니다.

프런트엔드 디자인은 DESIGN.md 파일을 참고하여 진행할 것
