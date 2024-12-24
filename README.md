<a name="top"></a>
[![Legacy project](/legacyprjt-main.png)](https://test-front-lovat.vercel.app)
![JavaScript Badge](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript&logoColor=white&style=flat)
![Python Badge](https://img.shields.io/badge/Python-3.9+-blue?logo=python&logoColor=white&style=flat)
![OS](https://img.shields.io/badge/OS-ubuntu%2C%20windows-0078D4)
![Deployment](https://img.shields.io/badge/Deployment-AWS%20%2B%20Vercel-orange?logo=amazonaws&logoColor=white&style=flat)
![Database](https://img.shields.io/badge/Database-PostgreSQL-blue?logo=postgresql&logoColor=white&style=flat)
![API](https://img.shields.io/badge/API-Google%20Maps-4285F4?logo=googlemaps&logoColor=white&style=flat)
![Environment](https://img.shields.io/badge/Environment-Anaconda-yellowgreen?logo=anaconda&logoColor=white&style=flat)
![Frontend](https://img.shields.io/badge/Frontend-React%20%2B%20Redux%20%2B%20TailwindCSS-blue?logo=react&logoColor=white&style=flat)
![Backend](https://img.shields.io/badge/Backend-Node.js%20%2B%20Express-green?logo=nodedotjs&logoColor=white&style=flat)
![IDE](https://img.shields.io/badge/IDE-VS%20Code%20%2B%20Cursor.ai-blue?logo=visualstudiocode&logoColor=white&style=flat)
![GitHub](https://img.shields.io/badge/Version%20Control-GitHub-black?logo=github&logoColor=white&style=flat)
![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-blue?logo=githubactions&logoColor=white&style=flat)
[![OpenAI API](https://img.shields.io/badge/OpenAI%20API-GPT--4o-brightgreen.svg?logo=OpenAI&logoColor=white)](https://openai.com/)

## 목차

- [설명](#-설명)
- [구성](#-구성)
- [개발로그](#-개발로그)
- [디버깅로그](#-디버깅로그)
- [랭체인구성](#-랭체인)
- [자료](#-자료)
- [연락처](#%EF%B8%8F-연락처)

## ��️ 설명

**유산지기**: 국가 문화재,행사 알림 서비스

- **구글 맵 지원**:사용자 위치 기반 문화재 정보 제공
- **챗봇**: - 사용자 질문에 실시간으로 응답하고, 관심 있는 문화재 정보를 제공,
  문화재 검색 및 행사 일정 알림
- **데이터관리**: 문화재 및 행사 데이터의 효율적 저장 및 업데이트
- **유지보수**: 시스템 안정성 확보 및 정기적 업데이트를 통한 최적화

## �� 구성

| 기능                | 설명                                 | 주요 파일                                                                  |
| ------------------- | ------------------------------------ | -------------------------------------------------------------------------- |
| **홈**              | 메인 화면과 네비게이션 제공          | `Home.jsx`, `Header.jsx`, `Navbar.jsx`, `ImageSlider.css`, `store.js`      |
| **챗봇**            | 문화재 관련 질문 응답 및 정보 제공   | `Chatbot.jsx`, `Chatbot.css`, `config.js`, `MessageParser.js`, `store.js`  |
| **위치 검색**       | 사용자 위치 기반 문화재 및 행사 검색 | `Search.jsx`, `Map.jsx`, `Modal.jsx`, `heritageDetailSlice.js`, `store.js` |
| **행사 일정**       | 행사 일정 관리 및 알림 제공          | `Event_schedule.jsx`, `EventModal.jsx`, `eventSlice.js`, `apiUrl.js`       |
| **마이페이지**      | 사용자 관심 문화재 및 행사 목록 관리 | `FavoriteList.jsx`, `Mypage.jsx`, `favoriteSlice.js`, `PageModal.jsx`      |
| **로그인/회원가입** | 사용자 인증 및 계정 관리             | `useAuth.js`, `authSlice.js`, `Login.jsx`, `Signup.jsx`, `apiUrl.js`       |

## �� 개발로그

## �� 디버깅로그

```
(python 환경)
2024-12-24 11:58:33.085 [info] [Info  - 11:58:33 AM] (7832) Assuming Python version 3.12.7.final.0
2024-12-24 11:58:33.426 [info] [Error - 11:58:33 AM] (7832) File or directory "<default workspace root>" does not exist.
2024-12-24 11:58:33.426 [info] [Info  - 11:58:33 AM] (7832) No source files found.
----------------------------------------------------------------
(github action)
Run eval "$($HOME/miniconda/bin/conda shell.bash hook)"
  eval "$($HOME/miniconda/bin/conda shell.bash hook)"
  conda activate myenv
  if [ -f requirements.txt ]; then pip install -r requirements.txt; fi
  shell: /usr/bin/bash -e {0}
EnvironmentNameNotFound: Could not find conda environment: myenv
You can list all discoverable environments with `conda info --envs`.
----------------------------------------------------------------
```

## **EC2에서 Miniconda 확인하기 (1. myenv 확인, 2.Windows에서 Linux로 전환 체크)**

1.  **Miniconda 환경설정**:

    - SSH를 통해 EC2 서버에 접속 후 다음 명령 실행:
      conda info --envs \*결과: 없음

      conda create -n myenv python=3.12.7 (나중에는 워크플로 수정) \*결과: myenv 생성

2.  \*\* 라우팅 Linux화
    // Python 경로 및 스크립트 경로 설정
    const pythonPath = path.join(
    "/home/ubuntu/miniconda",
    "envs",
    "myenv",
    "bin",
    "python3"
    );
    const scriptPath = path.join(\_\_dirname, "chatbot", "chatbot.py");

        let answer = "";

        *결과: chatbot 연결 확인

        **문제해결: 다른환경에도 작동하게 Github Actions yml 에 myenv 생성 명령어 추가

```
        - name: Create Conda Environment
      run: |
        eval "$($HOME/miniconda/bin/conda shell.bash hook)"
        conda create -n myenv python=3.12.7 || echo "Environment already exists."
```

## �� 랭체인

## �� 자료

## ��️ 연락처

Legacy Project와 관련된 문의, 서비스, 정보에 대해 더 알고 싶으시면 언제든지 저희에게 문의하세요. 지원을 제공하고 모든 질문에 답변드릴 준비가 되어 있습니다. 아래는 저희 팀과 연락할 수 있는 방법입니다:

- **이메일**: 문의/지원 [support@legacy.com](mailto:support@legacy.com).
- **웹사이트**: 유산사이트(https://test-front-lovat.vercel.app).
- **기타문의**: 카카오 플러스

[Back to top](#top)

```

```
