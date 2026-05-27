`---
name: git-commit-batcher
description: Break repository changes into small logical commits, write commit messages as `category: 한글 메시지`, and push the result safely.
compatibility: Designed for Codex and opencode; discoverable from `.agents/skills/` in git worktrees.
metadata:
  client_targets: codex,opencode
  task_type: git,commits,push
  language: ko,en
---

# Git Commit Batcher

Use this skill when the user wants staged changes split into small, reviewable commits and pushed to the remote.

## Source principles

Follow the Agent Skills format principles:

- Keep this file as the primary instruction surface.
- Prefer progressive disclosure: keep instructions concise here and add support files only if needed later.
- Keep skill files portable and version-controlled.

## Commit message convention

Write every commit message in this exact shape:

`category: 한글 메시지`

Use a lowercase English category on the left and a concise Korean summary on the right.

Preferred categories:

- `feat` for new behavior
- `fix` for bug fixes
- `docs` for documentation only
- `refactor` for internal code restructuring without behavior change
- `test` for tests only
- `chore` for maintenance work
- `style` for formatting or lint-only changes
- `perf` for performance changes
- `build` for build or dependency changes
- `ci` for CI or automation changes
- `revert` for reverting a previous commit

Rules:

- Keep the Korean message short, concrete, and outcome-focused.
- One commit should represent one logical change.
- Do not mix unrelated file groups in the same commit.
- Prefer present-tense, action-oriented wording.
- Keep the subject line brief enough to scan in `git log --oneline`.

Examples:

- `feat: 로그인 폼 유효성 검사 추가`
- `fix: 날짜 계산 오류 수정`
- `docs: 설치 방법 정리`
- `refactor: 결제 흐름 분리`
- `chore: 의존성 갱신`

## Workflow

1. Inspect the working tree.
   - Run `git status --short` first.
   - Review the diff before splitting anything.
2. Group changes by intent.
   - Separate feature work, bug fixes, docs, formatting, tests, and maintenance.
   - Keep each commit as small as possible while still coherent.
   - If a file contains multiple unrelated changes, split hunks carefully.
3. Stage one logical unit at a time.
   - Prefer `git add -p` when a file contains mixed changes.
   - If the repository has generated or noisy files, keep them out unless they are part of the requested work.
4. Verify before committing.
   - Run the smallest relevant test or lint command for the staged change when practical.
   - If verification is unavailable, mention the gap before committing.
5. Commit each unit separately.
   - Use the commit convention exactly.
   - Re-check `git status --short` after each commit.
6. Push when all commits are complete.
   - Push only after the branch history is clean and intentional.
   - Do not force-push unless the user explicitly asked for history rewriting.

## Safety rules

- Never bundle unrelated edits just to reduce the number of commits.
- Never rewrite published history without explicit user approval.
- Never push if the branch is clearly in a broken or partially staged state.
- If the repository has uncommitted user changes outside the requested scope, leave them untouched.
- If remote push fails, report the exact blocker and stop.

## When to pause and ask

Ask the user before proceeding if:

- The branch has a dirty state that cannot be split cleanly.
- The requested changes require history rewriting.
- A push would require credential setup, network access, or remote confirmation you do not have.
- The user’s commit convention conflicts with repository policy.

## Output style

When reporting progress, be concise and explicit:

- list commit groups before creating them
- show commit messages in the required format
- mention what was pushed and to which branch
- mention any skipped tests or unresolved risks

