pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';

// ==================================================
// 전역 설정
// ==================================================
// 주의: 여기에 API Key를 직접 입력해두면 매번 설정할 필요가 없어 매우 편리하지만, 
// 소스코드에 키가 노출되므로 학교 선생님들끼리만 사용하는 안전한 링크에서만 활용하세요.
const DEFAULT_API_KEY = ""; // 예시: "AIzaSy..." (따옴표 안에 입력)

// 기본 샘플 데이터
const defaultDocuments = [
    {
        id: "default-1",
        title: "[샘플] 늘봄초등학교 전결 규정 (2026)",
        type: "txt",
        content: `[늘봄초등학교 위임전결 규정 요약]
- 예산 지출/품의: 100만원 이하 (부장 전결), 100만원 초과 ~ 500만원 이하 (교감 전결), 500만원 초과 (교장 결재)
- 품의 기준 예외: 일상적인 소모품(복사용지 등) 및 급식 재료비는 금액 관계없이 교감 전결 가능.
- 출장 신청: 관내 출장 (본인 신청 후 교무부장 전결), 관외 출장 (교감 전결), 시도외 출장 및 해외 연수 (교장 결재)
- 휴가/조퇴/지각: 1일 미만 외출/조퇴 (교무부장 전결), 1일 이상~3일 이하 연가/병가 (교감 전결), 4일 이상 장기 휴가 (교장 결재)
- 학생 포상 및 징계: 생활교육위원회 의결 후 교장 결재 필수.
- 외부 공문 처리: 단순 접수 공문 (담당자 지정 후 부장 전결), 계획 수립이 필요한 공문 (교감 전결), 보고 및 예산 수반 공문 (교장 결재)`,
        size: "542자"
    },
    {
        id: "default-2",
        title: "[샘플] 늘봄초등학교 업무 분장표 (2026)",
        type: "txt",
        content: `[2026학년도 늘봄초등학교 주요 보직 및 업무 분장]
1. 교무기획부 (부장: 김교무)
- 김교무 부장: 교육과정 총괄, 학교운영위원회 관리, 주간학습안내 취합
- 이교무 교사: 외부 공문 수신 및 배부, NEIS 학적 관리, 교과서 주문 및 배부
- 박교무 교사: 주간 주번 교사 편성, 학교 행사 기획, 공무원증 및 보안 업무

2. 학생안전부 (부장: 최안전)
- 최안전 부장: 학교 안전 계획 수립, 학교폭력대책심의위원회 대응, 배움터지킴이 관리
- 정안전 교사: 학생 교통안전 교육, 등하교 지도, 자전거 통학 대장 관리
- 강안전 교사: 소방 대피 훈련, 재난대응 안전한국훈련 총괄, 교내 안전 점검

3. 행정실 (실장: 박행정)
- 박행정 실장: 학교 재정 및 예산 편성 총괄, 계약 업무(공사, 물품)
- 김행정 주무관: 급여 계산, 연말정산, 교직원 4대보험, 세입세출외현금 관리
- 여행정 주무관: 시설물 유지 보수, 물품 대장 관리, 소방/가스 안전 대행 관리`,
        size: "625자"
    },
    {
        id: "default-3",
        title: "[샘플] 일과시정표 및 강당사용 규칙",
        type: "txt",
        content: `[늘봄초등학교 일과 시정표]
- 08:40 ~ 09:00 (20분) : 아침 자율 활동 및 독서 시간
- 09:00 ~ 09:40 (40분) : 1교시
- 09:40 ~ 09:50 (10분) : 쉬는 시간
- 09:50 ~ 10:30 (40분) : 2교시
- 10:30 ~ 10:50 (20분) : 중간 휴식 시간 (놀이 시간)
- 10:50 ~ 11:30 (40분) : 3교시
- 11:30 ~ 11:40 (10분) : 쉬는 시간
- 11:40 ~ 12:20 (40분) : 4교시
- 12:20 ~ 13:20 (60분) : 점심 시간 및 급식 지도
- 13:20 ~ 14:00 (40분) : 5교시
- 14:00 ~ 14:10 (10분) : 쉬는 시간
- 14:10 ~ 14:50 (40분) : 6교시

[체육관(강당) 사용 시간표 및 규칙]
- 월요일: 3~4학년 체육 수업 (오전), 방과후 농구 교실 (15:00~17:00)
- 화요일: 1~2학년 체육 수업 (오전), 배드민턴 동아리 (16:00~18:00)
- 수요일: 5~6학년 체육 수업 (오전), 교직원 배구 동호회 (15:30~17:30)
- 목요일: 3~4학년 체육 수업 (오전), 방과후 배드민턴 (15:00~17:00)
- 금요일: 5~6학년 체육 수업 (오전), 자유 체육 및 행사 준비 (15:00 이후)
* 규칙: 실내 전용 운동화 착용 필수, 물을 제외한 모든 식음료 및 간식 반입 절대 금지, 사용 후 창문 단속 및 전등 소등 상태 확인 필수. 예약은 교무실 행정실 앞 화이트보드에 최소 1일 전 수기 기재.`,
        size: "740자"
    }
];

const defaultPresetQuestions = [
    { q: "교장 전결 사항과 교감 전결 사항의 예산 기준 차이는?", label: "결재선 규정" },
    { q: "체육대회 소모품 50만원 품의는 누구까지 결재받아야 해?", label: "품의 전결" },
    { q: "1일 조퇴를 하려면 누구 결재를 받아야 하지?", label: "조퇴/휴가 결재" },
    { q: "수요일 오후에 강당을 사용하는 동호회는 무엇이고, 규칙은 어때?", label: "강당 사용 규칙" },
    { q: "교무기획부 소속 교사들과 각각 담당하고 있는 업무를 표로 정리해줘.", label: "업무 분장 정리" }
];

// ==================================================
// IndexedDB Helper for Persistent Folder Access
// ==================================================
const DB_NAME = 'SchoolbotFolderDB';
const STORE_NAME = 'FolderHandlesStore';
const HANDLE_KEY = 'saved_directory_handle';

function getDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, 1);
        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME);
            }
        };
        request.onsuccess = (e) => resolve(e.target.result);
        request.onerror = (e) => reject(e.target.error);
    });
}

async function saveFolderHandle(handle) {
    const db = await getDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        const request = store.put(handle, HANDLE_KEY);
        request.onsuccess = () => resolve();
        request.onerror = (e) => reject(e.target.error);
    });
}

async function getFolderHandle() {
    const db = await getDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const request = store.get(HANDLE_KEY);
        request.onsuccess = (e) => resolve(e.target.result);
        request.onerror = (e) => reject(e.target.error);
    });
}

async function deleteFolderHandle() {
    const db = await getDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        const request = store.delete(HANDLE_KEY);
        request.onsuccess = () => resolve();
        request.onerror = (e) => reject(e.target.error);
    });
}

function App() {
    const [documents, setDocuments] = React.useState(() => {
        const saved = localStorage.getItem('school_chatbot_docs');
        return saved ? JSON.parse(saved) : defaultDocuments;
    });

    const [presetQuestions, setPresetQuestions] = React.useState(() => {
        const saved = localStorage.getItem('school_chatbot_presets');
        return saved ? JSON.parse(saved) : defaultPresetQuestions;
    });
    
    const [messages, setMessages] = React.useState([
        {
            sender: "bot",
            text: "안녕하세요, 선생님! 🏫 **학교 업무경감 AI 비서(스쿨봇)**입니다.\n\n각 학교 실정에 맞춘 **전결 규정, 업무 분장, 시정표, 시설물 규칙**을 스마트폰에서 편리하게 조회할 수 있습니다.\n\n💡 **스마트한 팁!**\n1. 우측 상단의 **설정(⚙️) 버튼**을 눌러 본인의 Gemini API Key를 등록해 주세요.\n2. 규정 문서를 새로 등록한 뒤 좌측 문서함의 **[🪄 AI 퀵메뉴 분석]** 버튼을 누르시면, AI가 문서를 직접 파악해 **해당 규정에 꼭 맞는 맞춤형 빠른 질문 단축키**를 실시간으로 자동 구성해 줍니다!\n3. **[📂 PC 폴더 연동]** 버튼을 누르면 내 컴퓨터의 원하는 폴더를 직접 지정하여 그 안의 PDF/TXT 파일을 한 번에 자동으로 일괄 등록할 수 있습니다!\n\n아래의 자주 묻는 예시 질문을 눌러 먼저 대화를 시작해 보세요.",
            timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
        }
    ]);
    
    const [inputValue, setInputValue] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);
    const [isGeneratingPresets, setIsGeneratingPresets] = React.useState(false);
    const [isSyncingFolder, setIsSyncingFolder] = React.useState(false);
    const [folderSyncStatus, setFolderSyncStatus] = React.useState(""); // 폴더 동기화 진행 상태 메시지
    
    // 로컬 폴더 연동 지속성을 위한 신규 상태
    const [linkedFolderName, setLinkedFolderName] = React.useState(""); // 연동된 폴더명
    const [hasSavedFolder, setHasSavedFolder] = React.useState(false); // 저장된 폴더 존재 여부
    const [folderPermissionRequired, setFolderPermissionRequired] = React.useState(false); // 브라우저 권한 재승인 필요 여부

    const [activeTab, setActiveTab] = React.useState("docs");
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const [showInstallGuide, setShowInstallGuide] = React.useState(false);
    
    // 마운트 시 저장된 로컬 폴더 핸들 복구
    React.useEffect(() => {
        const checkSavedFolder = async () => {
            if (!window.showDirectoryPicker) return;
            try {
                const handle = await getFolderHandle();
                if (handle) {
                    setLinkedFolderName(handle.name);
                    setHasSavedFolder(true);
                    
                    // 브라우저의 보안 세션별 권한 체크
                    const permState = await handle.queryPermission({ mode: 'read' });
                    if (permState !== 'granted') {
                        setFolderPermissionRequired(true);
                    }
                }
            } catch (err) {
                console.error("저장된 폴더 정보를 가져오지 못했습니다:", err);
            }
        };
        checkSavedFolder();
    }, []);

    
    // API 설정 관련 상태
    const [apiKey, setApiKey] = React.useState(() => {
        return localStorage.getItem('school_chatbot_api_key') || DEFAULT_API_KEY;
    });
    const [selectedModel, setSelectedModel] = React.useState(() => {
        return localStorage.getItem('school_chatbot_model') || "gemini-2.5-flash";
    });
    const [showSettings, setShowSettings] = React.useState(false);
    const [tempApiKey, setTempApiKey] = React.useState(apiKey);
    const [tempModel, setTempModel] = React.useState(selectedModel);

    const [textTitle, setTextTitle] = React.useState("");
    const [textContent, setTextContent] = React.useState("");
    const [isParsingPdf, setIsParsingPdf] = React.useState(false);
    const [errorMsg, setErrorMsg] = React.useState("");
    const [successMsg, setSuccessMsg] = React.useState("");
    
    const chatEndRef = React.useRef(null);
    const fileInputRef = React.useRef(null);

    React.useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    React.useEffect(() => {
        localStorage.setItem('school_chatbot_docs', JSON.stringify(documents));
    }, [documents]);

    React.useEffect(() => {
        localStorage.setItem('school_chatbot_presets', JSON.stringify(presetQuestions));
    }, [presetQuestions]);

    // 브라우저 File System Access API를 활용한 PC 폴더 직접 연동
    const handleFolderPicker = async () => {
        // 브라우저 호환성 체크
        if (!window.showDirectoryPicker) {
            setErrorMsg("이 브라우저에서는 PC 폴더 연동을 지원하지 않습니다. Chrome 또는 Edge 브라우저를 사용해 주세요.");
            return;
        }

        try {
            // 네이티브 OS 폴더 선택 다이얼로그 띄우기
            const dirHandle = await window.showDirectoryPicker({ mode: 'read' });
            
            setIsSyncingFolder(true);
            setErrorMsg("");
            setSuccessMsg("");
            setFolderSyncStatus("선택된 폴더를 스캔하는 중...");

            let newDocsFound = [];
            let skippedCount = 0;
            let updatedCount = 0;
            let processedCount = 0;

            // 폴더 내 파일 순회
            for await (const entry of dirHandle.values()) {
                if (entry.kind !== 'file') continue;
                const name = entry.name;
                const isTargetFile = name.toLowerCase().endsWith('.pdf') || name.toLowerCase().endsWith('.txt');
                if (!isTargetFile) continue;

                // 스마트 델타 동기화 로직
                const existingDocIndex = documents.findIndex(doc => doc.title === name);

                processedCount++;
                setFolderSyncStatus(`분석 중: ${name} (${processedCount}번째 파일...)`);

                try {
                    const file = await entry.getFile();

                    if (name.toLowerCase().endsWith('.pdf')) {
                        const arrayBuffer = await file.arrayBuffer();
                        const typedarray = new Uint8Array(arrayBuffer);
                        const loadingTask = pdfjsLib.getDocument({ data: typedarray });
                        const pdf = await loadingTask.promise;

                        let extractedText = "";
                        const numPages = pdf.numPages;
                        for (let i = 1; i <= numPages; i++) {
                            const page = await pdf.getPage(i);
                            const textContentObj = await page.getTextContent();
                            const pageText = textContentObj.items.map(item => item.str).join(" ");
                            extractedText += `--- [Page ${i}] ---\n` + pageText + "\n\n";
                        }

                        if (extractedText.trim()) {
                            const newSize = extractedText.length.toLocaleString() + "자";
                            if (existingDocIndex >= 0) {
                                if (documents[existingDocIndex].size !== newSize) {
                                    documents[existingDocIndex] = { ...documents[existingDocIndex], content: extractedText, size: newSize };
                                    updatedCount++;
                                } else {
                                    skippedCount++;
                                }
                            } else {
                                newDocsFound.push({
                                    id: 'folder_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
                                    title: name,
                                    type: 'pdf',
                                    content: extractedText,
                                    size: newSize
                                });
                            }
                        }
                    } else if (name.toLowerCase().endsWith('.txt')) {
                        const text = await file.text();
                        if (text.trim()) {
                            const newSize = text.length.toLocaleString() + "자";
                            if (existingDocIndex >= 0) {
                                if (documents[existingDocIndex].size !== newSize) {
                                    documents[existingDocIndex] = { ...documents[existingDocIndex], content: text, size: newSize };
                                    updatedCount++;
                                } else {
                                    skippedCount++;
                                }
                            } else {
                                newDocsFound.push({
                                    id: 'folder_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
                                    title: name,
                                    type: 'txt',
                                    content: text,
                                    size: newSize
                                });
                            }
                        }
                    }
                } catch (fileErr) {
                    console.warn(`파일 처리 실패 (${name}):`, fileErr);
                }
            }

            // 폴더 핸들을 IndexedDB에 저장 (다음 실행 시 재연동 가능)
            await saveFolderHandle(dirHandle);
            setLinkedFolderName(dirHandle.name);
            setHasSavedFolder(true);
            setFolderPermissionRequired(false);

            if (newDocsFound.length > 0 || updatedCount > 0) {
                const finalDocs = [...newDocsFound, ...documents];
                setDocuments(finalDocs);

                let msg = `"${dirHandle.name}" 폴더 연동 완료: 추가 ${newDocsFound.length}개, 업데이트 ${updatedCount}개`;
                if (skippedCount > 0) msg += ` (유지 ${skippedCount}개)`;
                setSuccessMsg(msg);

                if (apiKey) {
                    generateAiPresets(finalDocs, apiKey, selectedModel);
                }
            } else if (skippedCount > 0) {
                setSuccessMsg(`"${dirHandle.name}" 폴더 내 ${skippedCount}개 파일이 최신 상태입니다. 추가할 문서가 없습니다.`);
            } else {
                setErrorMsg("선택하신 폴더에서 지원하는 문서를 찾을 수 없습니다.");
            }
        } catch (err) {
            // 사용자가 폴더 선택을 취소한 경우 (AbortError)
            if (err.name !== 'AbortError') {
                setErrorMsg("폴더 연동 중 오류가 발생했습니다: " + (err.message || "알 수 없는 오류"));
            }
        } finally {
            setIsSyncingFolder(false);
            setFolderSyncStatus("");
        }
    };

    // 저장된 폴더를 다시 스캔하여 새 파일을 동기화
    const handleResyncFolder = async () => {
        if (!window.showDirectoryPicker) return;
        try {
            const dirHandle = await getFolderHandle();
            if (!dirHandle) {
                setErrorMsg("저장된 폴더 정보가 없습니다. 먼저 폴더를 선택해 주세요.");
                return;
            }

            // 브라우저 세션마다 권한 재확인 필요
            let permState = await dirHandle.queryPermission({ mode: 'read' });
            if (permState !== 'granted') {
                permState = await dirHandle.requestPermission({ mode: 'read' });
            }
            if (permState !== 'granted') {
                setFolderPermissionRequired(true);
                setErrorMsg("폴더 접근 권한이 거부되었습니다. 브라우저 설정에서 권한을 허용해 주세요.");
                return;
            }
            setFolderPermissionRequired(false);

            setIsSyncingFolder(true);
            setErrorMsg("");
            setSuccessMsg("");
            setFolderSyncStatus("저장된 폴더를 스캔하는 중...");

            let newDocsFound = [];
            let skippedCount = 0;
            let updatedCount = 0;
            let processedCount = 0;

            for await (const entry of dirHandle.values()) {
                if (entry.kind !== 'file') continue;
                const name = entry.name;
                const isTargetFile = name.toLowerCase().endsWith('.pdf') || name.toLowerCase().endsWith('.txt');
                if (!isTargetFile) continue;

                // 스마트 델타 동기화 로직
                const existingDocIndex = documents.findIndex(doc => doc.title === name);
                
                try {
                    const file = await entry.getFile();
                    
                    if (name.toLowerCase().endsWith('.pdf')) {
                        const arrayBuffer = await file.arrayBuffer();
                        const typedarray = new Uint8Array(arrayBuffer);
                        const pdf = await pdfjsLib.getDocument({ data: typedarray }).promise;
                        let extractedText = "";
                        for (let i = 1; i <= pdf.numPages; i++) {
                            const page = await pdf.getPage(i);
                            const tc = await page.getTextContent();
                            extractedText += `--- [Page ${i}] ---\n` + tc.items.map(item => item.str).join(" ") + "\n\n";
                        }
                        if (extractedText.trim()) {
                            const newSize = extractedText.length.toLocaleString() + "자";
                            if (existingDocIndex >= 0) {
                                // 기존 문서 존재, 크기 비교 (간이 변경 감지)
                                if (documents[existingDocIndex].size !== newSize) {
                                    documents[existingDocIndex] = { ...documents[existingDocIndex], content: extractedText, size: newSize };
                                    updatedCount++;
                                } else {
                                    skippedCount++;
                                }
                            } else {
                                newDocsFound.push({ id: 'folder_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5), title: name, type: 'pdf', content: extractedText, size: newSize });
                            }
                        }
                    } else if (name.toLowerCase().endsWith('.txt')) {
                        const text = await file.text();
                        if (text.trim()) {
                            const newSize = text.length.toLocaleString() + "자";
                            if (existingDocIndex >= 0) {
                                if (documents[existingDocIndex].size !== newSize) {
                                    documents[existingDocIndex] = { ...documents[existingDocIndex], content: text, size: newSize };
                                    updatedCount++;
                                } else {
                                    skippedCount++;
                                }
                            } else {
                                newDocsFound.push({ id: 'folder_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5), title: name, type: 'txt', content: text, size: newSize });
                            }
                        }
                    }
                } catch (fileErr) { console.warn(`파일 처리 실패 (${name}):`, fileErr); }
            }

            if (newDocsFound.length > 0 || updatedCount > 0) {
                const finalDocs = [...newDocsFound, ...documents];
                setDocuments(finalDocs);
                let msg = `"${dirHandle.name}" 폴더 동기화 완료: 추가 ${newDocsFound.length}개, 업데이트 ${updatedCount}개`;
                if (skippedCount > 0) msg += ` (유지 ${skippedCount}개)`;
                setSuccessMsg(msg);
                if (apiKey) generateAiPresets(finalDocs, apiKey, selectedModel);
            } else if (skippedCount > 0) {
                setSuccessMsg(`"${dirHandle.name}" 폴더가 최신 상태입니다. (변경사항 없음)`);
            } else {
                setErrorMsg("연동된 폴더에서 지원하는 문서를 찾을 수 없습니다.");
            }
        } catch (err) {
            if (err.name !== 'AbortError') {
                setErrorMsg("폴더 재동기화 중 오류가 발생했습니다: " + (err.message || "알 수 없는 오류"));
            }
        } finally {
            setIsSyncingFolder(false);
            setFolderSyncStatus("");
        }
    };

    // 연동된 폴더 해제
    const handleUnlinkFolder = async () => {
        if (!confirm(`"${linkedFolderName}" 폴더 연동을 해제하시겠습니까?\n(이미 등록된 문서는 삭제되지 않습니다)`)) return;
        await deleteFolderHandle();
        setLinkedFolderName("");
        setHasSavedFolder(false);
        setFolderPermissionRequired(false);
        setSuccessMsg("폴더 연동이 해제되었습니다.");
    };

    // AI를 통해 문서 기반 퀵메뉴(단축키) 질문들 자동 추출 및 생성하는 함수
    const generateAiPresets = async (currentDocs, currentApiKey, currentModel) => {
        if (!currentDocs || currentDocs.length === 0) return;
        if (!currentApiKey) {
            setErrorMsg("퀵메뉴 자동 분석을 위해서는 우측 상단 ⚙️ 설정에서 API Key를 먼저 등록해 주세요.");
            return;
        }

        setIsGeneratingPresets(true);
        setErrorMsg("");
        setSuccessMsg("");

        const contextString = currentDocs.map(doc => `[문서 제목: ${doc.title}]\n${doc.content}`).join("\n\n====================\n\n");

        const systemPrompt = `
        당신은 학교 행정 규정 문서를 꼼꼼히 분석하여 교사들이 일상에서 가장 자주 찾아보거나 헷갈려할 만한 '핵심 질문 5가지'를 뽑아내는 교무 행정 전문가입니다.
        
        [지침]
        1. 제공된 문서의 내용을 바탕으로 매우 구체적이고 실무적인 질문 5개를 만들어 주세요.
        2. 각 질문의 핵심 내용을 담은 직관적인 요약 라벨(이모지 포함 가능, 공백 포함 최대 7자)도 함께 지어주세요.
        3. 반드시 제공된 참고 문서에 나타나 있는 팩트(일수, 예산 액수, 담당자명 등)에 기반하여 질문을 도출해야 합니다.
        
        출력 형식은 마크다운 코드블록이나 대화체 설명 없이 오직 아래와 같은 순수한 유효 JSON 배열 포맷이어야 합니다:
        [
          {"q": "구체적인 질문 내용 1", "label": "💡 라벨 1"},
          {"q": "구체적인 질문 내용 2", "label": "📅 라벨 2"},
          ...
        ]
        `;

        const userPrompt = `
        [참고 학교 문서]
        ${contextString}

        ====================
        선생님들을 위한 맞춤형 핵심 퀵 질문 5개와 요약 라벨을 JSON 형식으로 정확히 생성해 주세요.
        `;

        try {
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${currentModel}:generateContent?key=${currentApiKey}`;

            const response = await fetch(apiUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: userPrompt }] }],
                    systemInstruction: { parts: [{ text: systemPrompt }] }
                })
            });

            const result = await response.json();
            
            if (result.error) {
                throw new Error(result.error.message || "Gemini API 오류");
            }

            const rawText = result.candidates?.[0]?.content?.parts?.[0]?.text;
            if (!rawText) {
                throw new Error("AI 응답에서 데이터를 추출하지 못했습니다.");
            }

            // JSON 텍스트 파싱을 위해 앞뒤 찌꺼기 제거 및 안전한 파싱
            const startIdx = rawText.indexOf('[');
            const endIdx = rawText.lastIndexOf(']');
            if (startIdx === -1 || endIdx === -1) {
                throw new Error("올바른 JSON 배열 형식을 찾을 수 없습니다.");
            }
            
            const cleanJsonText = rawText.substring(startIdx, endIdx + 1);
            const parsedPresets = JSON.parse(cleanJsonText);

            if (Array.isArray(parsedPresets) && parsedPresets.length > 0) {
                setPresetQuestions(parsedPresets);
                setSuccessMsg("🎉 업로드된 학교 규정을 완벽 분석하여 맞춤형 퀵 메뉴를 자동 구성했습니다!");
            } else {
                throw new Error("데이터 형식이 올바르지 않습니다.");
            }
        } catch (err) {
            setErrorMsg(`퀵메뉴 생성 중 오류가 발생했습니다: ${err.message || "API 설정을 확인해 주세요."}`);
        } finally {
            setIsGeneratingPresets(false);
        }
    };

    const handlePdfUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        if (file.type !== "application/pdf") {
            setErrorMsg("PDF 형식의 파일만 업로드할 수 있습니다.");
            return;
        }

        setIsParsingPdf(true);
        setErrorMsg("");
        setSuccessMsg("");

        try {
            const reader = new FileReader();
            reader.onload = async function() {
                try {
                    const typedarray = new Uint8Array(this.result);
                    const loadingTask = pdfjsLib.getDocument({ data: typedarray });
                    const pdf = await loadingTask.promise;
                    
                    let extractedText = "";
                    const numPages = pdf.numPages;
                    
                    for (let i = 1; i <= numPages; i++) {
                        const page = await pdf.getPage(i);
                        const textContentObj = await page.getTextContent();
                        const pageText = textContentObj.items.map(item => item.str).join(" ");
                        extractedText += `--- [Page ${i}] ---\n` + pageText + "\n\n";
                    }

                    if (!extractedText.trim()) {
                        throw new Error("PDF에서 텍스트를 추출하지 못했습니다. 이미지 형태의 PDF인 경우 글자를 읽기 어려울 수 있습니다.");
                    }

                    const newDoc = {
                        id: 'doc_' + Date.now(),
                        title: file.name,
                        type: 'pdf',
                        content: extractedText,
                        size: extractedText.length.toLocaleString() + "자"
                    };

                    const updatedDocs = [newDoc, ...documents];
                    setDocuments(updatedDocs);
                    setSuccessMsg("PDF 문서를 성공적으로 등록했습니다!");
                    setIsParsingPdf(false);
                    if (fileInputRef.current) fileInputRef.current.value = "";

                    // API Key가 등록되어 있다면 자동으로 퀵메뉴 생성 실행
                    if (apiKey) {
                        generateAiPresets(updatedDocs, apiKey, selectedModel);
                    }
                } catch (err) {
                    setErrorMsg(err.message || "PDF 분석에 실패했습니다.");
                    setIsParsingPdf(false);
                }
            };
            reader.readAsArrayBuffer(file);
        } catch (err) {
            setErrorMsg("파일을 읽는 과정에서 오류가 발생했습니다.");
            setIsParsingPdf(false);
        }
    };

    const handleAddManualText = (e) => {
        e.preventDefault();
        if (!textTitle.trim() || !textContent.trim()) {
            setErrorMsg("제목과 내용을 모두 입력해 주세요.");
            return;
        }

        const newDoc = {
            id: 'doc_' + Date.now(),
            title: textTitle,
            type: 'txt',
            content: textContent,
            size: textContent.length.toLocaleString() + "자"
        };

        const updatedDocs = [newDoc, ...documents];
        setDocuments(updatedDocs);
        setTextTitle("");
        setTextContent("");
        setActiveTab("docs");
        setSuccessMsg("새로운 규정이 데이터에 추가되었습니다!");
        setErrorMsg("");

        // API Key가 등록되어 있다면 자동으로 퀵메뉴 생성 실행
        if (apiKey) {
            generateAiPresets(updatedDocs, apiKey, selectedModel);
        }
    };

    const handleDeleteDoc = (id) => {
        const updated = documents.filter(doc => doc.id !== id);
        setDocuments(updated);
        setSuccessMsg("문서가 삭제되었습니다.");
    };

    const handleResetToDefault = () => {
        if (confirm("기본 샘플 데이터로 복원하시겠습니까? (직접 추가한 파일들과 AI 맞춤형 퀵메뉴가 초기화됩니다)")) {
            setDocuments(defaultDocuments);
            setPresetQuestions(defaultPresetQuestions);
            setSuccessMsg("기본 데이터로 초기화되었습니다.");
        }
    };

    const handleExportData = () => {
        try {
            const exportPayload = {
                documents: documents,
                presetQuestions: presetQuestions
            };
            const dataStr = JSON.stringify(exportPayload, null, 2);
            const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
            
            const exportFileDefaultName = `스쿨봇_학교설정_${new Date().toISOString().slice(0,10)}.json`;
            
            const linkElement = document.createElement('a');
            linkElement.setAttribute('href', dataUri);
            linkElement.setAttribute('download', exportFileDefaultName);
            linkElement.click();
            setSuccessMsg("학교 설정 데이터(문서 및 퀵 메뉴)를 성공적으로 다운로드했습니다.");
        } catch (error) {
            setErrorMsg("데이터 내보내기에 실패했습니다.");
        }
    };

    const handleImportData = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(event) {
            try {
                const parsedData = JSON.parse(event.target.result);
                
                if (Array.isArray(parsedData)) {
                    setDocuments(parsedData);
                    setSuccessMsg("학교 설정 문서를 성공적으로 동기화했습니다!");
                } else if (parsedData.documents && Array.isArray(parsedData.documents)) {
                    setDocuments(parsedData.documents);
                    if (parsedData.presetQuestions && Array.isArray(parsedData.presetQuestions)) {
                        setPresetQuestions(parsedData.presetQuestions);
                    }
                    setSuccessMsg("학교 설정 문서 및 맞춤형 퀵 질문 세트를 성공적으로 동기화했습니다!");
                } else {
                    throw new Error("올바른 설정 파일 형식이 아닙니다.");
                }
                setErrorMsg("");
            } catch (error) {
                setErrorMsg("불러오기 실패: 올바른 스쿨봇 설정 파일(.json)이 아닙니다.");
            }
        };
        reader.readAsText(file);
    };

    const handleSendMessage = async (customQuery = null) => {
        const query = customQuery || inputValue;
        if (!query.trim()) return;

        // API 키가 비어있는 경우 먼저 설정하도록 유도
        if (!apiKey) {
            setErrorMsg("Gemini API Key가 등록되지 않았습니다. ⚙️ 설정에서 API Key를 입력 후 사용해 주세요.");
            setTempApiKey("");
            setTempModel(selectedModel);
            setShowSettings(true);
            return;
        }

        const userMsg = {
            sender: "user",
            text: query,
            timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, userMsg]);
        if (!customQuery) setInputValue("");
        setIsLoading(true);
        setIsSidebarOpen(false);

        const contextString = documents.map(doc => `[문서 제목: ${doc.title}]\n${doc.content}`).join("\n\n====================\n\n");

        const systemPrompt = `
        당신은 대한민국의 초/중/고등학교 교사들을 돕는 '학교 업무 경감 전문 인공지능 비서'입니다. 
        선생님들이 사소하지만 자주 잊어버리는 전결 규정, 시정표, 업무 분장, 특별실 예약 규정 등을 파악하도록 안내합니다.

        [중요 지침]
        1. 아래 제공되는 [참고 학교 문서]의 데이터에 절대적으로 기반하여 신뢰성 있고 구체적으로 대답하세요.
        2. 질문과 연관된 내용이 문서에 존재할 경우, 단순 답변 대신 '표(Table)'나 '구조화된 리스트'를 활용하여 선생님이 한눈에 파악할 수 있도록 대답해 주십시오. (마크다운 포맷 적극 권장)
        3. 만약 질문 내용이 제공된 [참고 학교 문서]에 나타나 있지 않거나, 유추할 근거가 부족한 경우 억지로 지어내지 마세요. 그 대신 "제공된 학교 규정 문서에서는 해당 내용을 찾을 수 없습니다. 관련 PDF나 텍스트를 좌측 문서함에 업로드해 주시면 정확한 안내가 가능합니다."라고 공손하고 명확히 선을 그어 말해주세요.
        4. 어조는 항상 존댓말을 사용하고, 교육 전문가답게 따뜻하고 명확하며 격조 있는 말투를 유지하세요.
        `;

        const userPrompt = `
        [참고 학교 문서]
        ${contextString}

        ====================
        [사용자 교사의 질문]
        "${query}"
        
        선생님의 질문에 부합하는 정답을 [참고 학교 문서] 안에서 찾아내어 마크다운 형태로 깔끔하고 예쁘게 답변해 주세요.
        `;

        try {
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${selectedModel}:generateContent?key=${apiKey}`;

            const response = await fetch(apiUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: userPrompt }] }],
                    systemInstruction: { parts: [{ text: systemPrompt }] }
                })
            });

            const result = await response.json();
            
            if (result.error) {
                throw new Error(result.error.message || "Gemini API 호출 중 오류가 발생했습니다.");
            }

            const botText = result.candidates?.[0]?.content?.parts?.[0]?.text || "답변을 불러오지 못했습니다. 다시 시도해 주세요.";

            setMessages(prev => [...prev, {
                sender: "bot",
                text: botText,
                timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
            }]);
        } catch (err) {
            setMessages(prev => [...prev, {
                sender: "bot",
                text: `❌ AI 서버 연동 오류: ${err.message || "네트워크 연결 상태를 확인하시거나 API Key를 확인해 주세요."}`,
                timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const renderMessageText = (text) => {
        try {
            return { __html: marked.parse(text) };
        } catch (e) {
            return { __html: text.replace(/\n/g, "<br/>") };
        }
    };

    const currentUrl = window.location.href;
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(currentUrl)}`;

    return (
        <div className="flex h-screen overflow-hidden bg-slate-50 text-slate-800">
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 z-20 bg-black/40 transition-opacity md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            <div className={`fixed inset-y-0 left-0 z-30 w-80 bg-white border-r border-slate-200 flex flex-col transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                
                <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-indigo-600 to-blue-700 text-white shadow-md">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                            <i className="fa-solid fa-graduation-cap text-xl"></i>
                        </div>
                        <div>
                            <h1 className="font-bold text-sm leading-tight">스쿨봇 (업무경감 AI)</h1>
                            <span className="text-[10px] text-indigo-100 font-medium tracking-wide">모바일 지원 교무 비서</span>
                        </div>
                    </div>
                    <button onClick={() => setIsSidebarOpen(false)} className="md:hidden w-8 h-8 flex items-center justify-center rounded-full bg-black/10 text-white/90 hover:text-white">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <div className="flex border-b border-slate-100 bg-slate-50">
                    <button 
                        onClick={() => { setActiveTab("docs"); setErrorMsg(""); setSuccessMsg(""); }} 
                        className={`flex-1 py-3 text-xs font-semibold border-b-2 text-center transition-all ${activeTab === 'docs' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}>
                        <i className="fa-solid fa-file-invoice block mb-0.5 text-sm"></i> 문서보관함 ({documents.length})
                    </button>
                    <button 
                        onClick={() => { setActiveTab("addText"); setErrorMsg(""); setSuccessMsg(""); }} 
                        className={`flex-1 py-3 text-xs font-semibold border-b-2 text-center transition-all ${activeTab === 'addText' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}>
                        <i className="fa-solid fa-pen-to-square block mb-0.5 text-sm"></i> 텍스트 입력
                    </button>
                    <button 
                        onClick={() => { setActiveTab("sharing"); setErrorMsg(""); setSuccessMsg(""); }} 
                        className={`flex-1 py-3 text-xs font-semibold border-b-2 text-center transition-all ${activeTab === 'sharing' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}>
                        <i className="fa-solid fa-share-nodes block mb-0.5 text-sm"></i> 동료 공유
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {errorMsg && (
                        <div className="bg-rose-50 border border-rose-100 text-rose-700 p-3 rounded-xl text-xs flex items-start space-x-2 animate-fade-in">
                            <i className="fa-solid fa-circle-exclamation mt-0.5 flex-shrink-0"></i>
                            <span>{errorMsg}</span>
                        </div>
                    )}
                    {successMsg && (
                        <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 p-3 rounded-xl text-xs flex items-start space-x-2 animate-fade-in">
                            <i className="fa-solid fa-circle-check mt-0.5 flex-shrink-0"></i>
                            <span>{successMsg}</span>
                        </div>
                    )}

                    {activeTab === 'docs' && (
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-2">
                                {/* 개별 PDF 업로드 */}
                                <div className="border-2 border-dashed border-slate-200 hover:border-indigo-400 bg-slate-50 hover:bg-indigo-50/20 rounded-xl p-3 transition-all text-center relative cursor-pointer shadow-inner">
                                    <input 
                                        type="file" 
                                        ref={fileInputRef}
                                        accept=".pdf" 
                                        onChange={handlePdfUpload}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        disabled={isParsingPdf}
                                    />
                                    {isParsingPdf ? (
                                        <div className="flex flex-col items-center justify-center space-y-1.5 py-1">
                                            <div className="w-5 h-5 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                                            <p className="text-[10px] text-indigo-600 font-semibold">PDF 분석 중...</p>
                                        </div>
                                    ) : (
                                        <div className="space-y-0.5">
                                            <div className="text-indigo-500 text-lg"><i className="fa-solid fa-cloud-arrow-up"></i></div>
                                            <p className="text-[10px] font-bold text-slate-700">PDF 파일 등록</p>
                                            <p className="text-[9px] text-slate-400">파일 1개씩 등록</p>
                                        </div>
                                    )}
                                </div>

                                {/* PC 폴더 연동 버튼 (상태별 분기) */}
                                {isSyncingFolder ? (
                                    <div className="border-2 border-dashed border-emerald-300 bg-emerald-50/50 rounded-xl p-3 text-center shadow-inner">
                                        <div className="flex flex-col items-center justify-center space-y-1.5 py-1">
                                            <div className="w-5 h-5 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                                            <p className="text-[10px] text-emerald-600 font-semibold leading-tight">{folderSyncStatus || '동기화 중...'}</p>
                                        </div>
                                    </div>
                                ) : hasSavedFolder ? (
                                    // 폴더가 연동된 상태
                                    <div className="border-2 border-emerald-300 bg-emerald-50 rounded-xl p-2.5 shadow-inner space-y-1.5">
                                        <div className="flex items-center space-x-1.5 min-w-0">
                                            <i className="fa-solid fa-folder-open text-emerald-500 text-sm flex-shrink-0"></i>
                                            <span className="text-[10px] font-bold text-emerald-700 truncate" title={linkedFolderName}>{linkedFolderName}</span>
                                        </div>
                                        {folderPermissionRequired ? (
                                            <button
                                                onClick={handleResyncFolder}
                                                className="w-full bg-amber-500 hover:bg-amber-600 text-white text-[9px] font-bold py-1.5 rounded-lg flex items-center justify-center space-x-1 transition-colors">
                                                <i className="fa-solid fa-key"></i>
                                                <span>권한 재승인 필요</span>
                                            </button>
                                        ) : (
                                            <button
                                                onClick={handleResyncFolder}
                                                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-[9px] font-bold py-1.5 rounded-lg flex items-center justify-center space-x-1 transition-colors shadow-sm">
                                                <i className="fa-solid fa-rotate"></i>
                                                <span>다시 동기화</span>
                                            </button>
                                        )}
                                        <div className="flex items-center justify-between">
                                            <button
                                                onClick={handleFolderPicker}
                                                className="text-[9px] text-slate-400 hover:text-indigo-600 transition-colors flex items-center space-x-0.5">
                                                <i className="fa-solid fa-folder-plus"></i>
                                                <span>폴더 변경</span>
                                            </button>
                                            <button
                                                onClick={handleUnlinkFolder}
                                                className="text-[9px] text-slate-400 hover:text-rose-500 transition-colors flex items-center space-x-0.5">
                                                <i className="fa-solid fa-link-slash"></i>
                                                <span>연동 해제</span>
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    // 미연동 상태
                                    <button
                                        onClick={handleFolderPicker}
                                        className="border-2 border-dashed border-emerald-200 hover:border-emerald-400 bg-emerald-50/30 hover:bg-emerald-50 rounded-xl p-3 transition-all text-center cursor-pointer shadow-inner w-full h-full">
                                        <div className="space-y-0.5">
                                            <div className="text-emerald-500 text-lg"><i className="fa-solid fa-folder-open"></i></div>
                                            <p className="text-[10px] font-bold text-slate-700">PC 폴더 연동</p>
                                            <p className="text-[9px] text-slate-400">폴더 내 일괄 등록</p>
                                        </div>
                                    </button>
                                )}
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between px-1">
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">등록된 학교 지식</span>
                                    <div className="flex items-center space-x-2">
                                        {/* AI 퀵메뉴 생성 버튼 */}
                                        {documents.length > 0 && apiKey && (
                                            <button 
                                                onClick={() => generateAiPresets(documents, apiKey, selectedModel)}
                                                disabled={isGeneratingPresets}
                                                className="text-[10px] text-indigo-600 hover:text-indigo-800 transition-colors flex items-center space-x-0.5 font-bold"
                                                title="등록된 문서를 AI가 정밀 분석하여 자주 묻는 빠른 질문 템플릿(퀵 메뉴)을 구성합니다.">
                                                {isGeneratingPresets ? (
                                                    <i className="fa-solid fa-spinner animate-spin"></i>
                                                ) : (
                                                    <i className="fa-solid fa-wand-magic-sparkles"></i>
                                                )}
                                                <span>AI 퀵메뉴 분석</span>
                                            </button>
                                        )}
                                        <button 
                                            onClick={handleResetToDefault}
                                            className="text-[10px] text-slate-400 hover:text-red-500 transition-colors flex items-center space-x-0.5">
                                            <i className="fa-solid fa-rotate-left"></i> <span>리셋</span>
                                        </button>
                                    </div>
                                </div>

                                {documents.length === 0 ? (
                                    <div className="text-center py-10 bg-slate-50 rounded-xl border border-slate-150">
                                        <i className="fa-regular fa-folder-open text-slate-300 text-2xl mb-1 block"></i>
                                        <span className="text-xs text-slate-400">등록된 문서가 없습니다.<br/>위에서 PDF를 업로드해 보세요!</span>
                                    </div>
                                ) : (
                                    <div className="space-y-2 max-h-[200px] overflow-y-auto">
                                        {documents.map((doc) => (
                                            <div key={doc.id} className="group border border-slate-100 hover:border-indigo-100 bg-white p-2.5 rounded-xl flex items-start justify-between space-x-2 transition-all shadow-sm">
                                                <div className="flex items-start space-x-2 min-w-0">
                                                    <span className={`text-sm mt-0.5 flex-shrink-0 ${doc.type === 'pdf' ? 'text-rose-500' : 'text-blue-500'}`}>
                                                        <i className={doc.type === 'pdf' ? "fa-solid fa-file-pdf" : "fa-solid fa-file-lines"}></i>
                                                    </span>
                                                    <div className="min-w-0">
                                                        <h4 className="text-xs font-semibold text-slate-700 truncate">{doc.title}</h4>
                                                        <span className="text-[9px] text-slate-400 font-mono">{doc.size}</span>
                                                    </div>
                                                </div>
                                                <button 
                                                    onClick={() => handleDeleteDoc(doc.id)}
                                                    className="text-slate-300 hover:text-rose-500 p-1 rounded-md transition-colors">
                                                    <i className="fa-solid fa-trash-can text-xs"></i>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {activeTab === 'addText' && (
                        <form onSubmit={handleAddManualText} className="space-y-3">
                            <div className="space-y-1">
                                <label className="text-[11px] font-bold text-slate-500">참고 문서 제목</label>
                                <input 
                                    type="text"
                                    placeholder="예: 2026학년도 체육관 특별실 시간표"
                                    value={textTitle}
                                    onChange={(e) => setTextTitle(e.target.value)}
                                    className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-slate-50 text-slate-800"
                                    required
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[11px] font-bold text-slate-500">규정/시간표 세부 텍스트</label>
                                <textarea 
                                    rows="9"
                                    placeholder="선생님이 알고 싶어 하시는 규정이나 시정표 텍스트 내용을 자유롭게 직접 붙여넣어 주세요."
                                    value={textContent}
                                    onChange={(e) => setTextContent(e.target.value)}
                                    className="w-full text-xs p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 font-mono bg-slate-50 leading-relaxed text-slate-800"
                                    required
                                ></textarea>
                            </div>
                            <button 
                                type="submit"
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg text-xs transition-colors flex items-center justify-center space-x-1.5 shadow">
                                <i className="fa-solid fa-plus"></i> <span>새 지식으로 추가</span>
                            </button>
                        </form>
                    )}

                    {activeTab === 'sharing' && (
                        <div className="space-y-4">
                            <div className="bg-indigo-50 border border-indigo-100 p-3 rounded-xl text-xs space-y-2 text-indigo-950">
                                <div className="font-bold flex items-center space-x-1">
                                    <i className="fa-solid fa-circle-nodes"></i>
                                    <span>학교 데이터 원클릭 동기화</span>
                                </div>
                                <p className="leading-relaxed text-[11px]">
                                    대표 선생님 한 분이 PDF 분석 및 **AI 퀵메뉴 분석**을 모두 마친 후, 이 데이터셋을 내보내 다른 교사들과 문서 및 단축키 질문까지 완벽하게 공유할 수 있습니다.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <button 
                                    onClick={handleExportData}
                                    className="w-full bg-white border border-indigo-200 hover:bg-indigo-50 text-indigo-700 font-semibold py-2.5 px-3 rounded-lg text-xs transition-colors flex items-center justify-center space-x-2 shadow-sm">
                                    <i className="fa-solid fa-file-export"></i>
                                    <span>현 학교 설정 내보내기 (.json)</span>
                                </button>

                                <div className="relative">
                                    <input 
                                        type="file" 
                                        accept=".json" 
                                        onChange={handleImportData}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    />
                                    <button 
                                        type="button"
                                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 px-3 rounded-lg text-xs transition-colors flex items-center justify-center space-x-2 shadow">
                                        <i className="fa-solid fa-file-import"></i>
                                        <span>가져와서 즉시 동기화</span>
                                    </button>
                                </div>
                            </div>

                            <div className="border border-slate-200 bg-white p-3 rounded-xl flex flex-col items-center text-center space-y-2">
                                <span className="text-[11px] font-bold text-slate-500">모바일 즉시 접속 QR코드</span>
                                <img 
                                    src={qrCodeUrl} 
                                    alt="QR Code" 
                                    className="w-32 h-32 border border-slate-100 rounded-md shadow-sm"
                                    onError={(e) => e.target.style.display='none'}
                                />
                                <span className="text-[10px] text-slate-400 leading-tight">교무실 모니터에 띄워두고<br/>스캔하면 스마트폰으로 즉시 연결</span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="p-4 border-t border-slate-100 bg-slate-50">
                    <button 
                        onClick={() => setShowInstallGuide(true)}
                        className="w-full bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold py-2 px-3 rounded-lg text-xs transition-colors flex items-center justify-center space-x-1">
                        <i className="fa-solid fa-mobile-screen-button"></i>
                        <span>스마트폰 홈 화면 추가 방법</span>
                    </button>
                </div>
            </div>

            <div className="flex-1 flex flex-col h-full overflow-hidden relative">
                
                <header className="h-16 border-b border-slate-200 bg-white px-4 flex items-center justify-between flex-shrink-0">
                    <div className="flex items-center space-x-2">
                        <button 
                            onClick={() => setIsSidebarOpen(true)} 
                            className="p-2 -ml-2 text-slate-500 hover:text-slate-800 focus:outline-none md:hidden"
                            aria-label="메뉴 열기">
                            <i className="fa-solid fa-bars text-lg"></i>
                        </button>
                        <div className="flex items-center space-x-2">
                            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></div>
                            <div>
                                <h2 className="text-sm font-bold text-slate-800">우리 학교 교무 행정 비서</h2>
                                <p className="text-[10px] text-slate-400">설정된 데이터: <strong>{documents.length}개</strong></p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <button 
                            onClick={() => setShowInstallGuide(true)}
                            className="text-indigo-600 border border-indigo-100 rounded-lg px-2.5 py-1.5 text-xs font-semibold bg-indigo-50/50 hover:bg-indigo-50 transition-colors flex items-center space-x-1"
                            title="스마트폰에 설치하여 편리하게 이용하세요">
                            <i className="fa-solid fa-plus-circle"></i>
                            <span className="hidden sm:inline">앱으로 설치</span>
                        </button>
                        
                        {/* API 설정 버튼 */}
                        <button 
                            onClick={() => {
                                setTempApiKey(apiKey);
                                setTempModel(selectedModel);
                                setShowSettings(true);
                            }}
                            className={`p-2 text-xs border rounded-lg shadow-sm transition-all flex items-center justify-center space-x-1 ${
                                apiKey 
                                    ? 'bg-emerald-50 text-emerald-600 border-emerald-200 hover:bg-emerald-100 hover:text-emerald-700' 
                                    : 'bg-rose-50 text-rose-600 border-rose-200 hover:bg-rose-100 hover:text-rose-700 animate-pulse'
                            }`}
                            title="AI 설정 (Gemini API Key)">
                            <i className="fa-solid fa-gear"></i>
                            <span className="hidden lg:inline font-semibold">{apiKey ? "설정 완료" : "API 등록 필요"}</span>
                        </button>
                        
                        <button 
                            onClick={() => {
                                if (confirm("대화 기록을 모두 지우고 처음으로 돌아갈까요?")) {
                                    setMessages([{
                                        sender: "bot",
                                        text: "대화방이 깨끗하게 정리되었습니다. 무엇이든 물어보세요! ☺️",
                                        timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
                                    }]);
                                }
                            }}
                            className="text-slate-400 hover:text-slate-600 p-2 text-xs border border-slate-200 rounded-lg bg-white shadow-sm transition-all"
                            title="대화방 초기화">
                            <i className="fa-solid fa-rotate-left"></i>
                        </button>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} items-start space-x-2.5`}>
                            {msg.sender === 'bot' && (
                                <div className="w-8 h-8 rounded-lg bg-indigo-100 border border-indigo-250 text-indigo-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                                    <i className="fa-solid fa-robot text-xs"></i>
                                </div>
                            )}
                            <div className="max-w-[85%] sm:max-w-[75%] space-y-1">
                                <div className={`px-4 py-2.5 rounded-2xl shadow-sm ${
                                    msg.sender === 'user' 
                                        ? 'bg-indigo-600 text-white rounded-tr-none' 
                                        : 'bg-white text-slate-800 rounded-tl-none border border-slate-100'
                                }`}>
                                    <div 
                                        className={`text-xs sm:text-sm leading-relaxed markdown-content ${msg.sender === 'user' ? 'text-white' : 'text-slate-800'}`}
                                        dangerouslySetInnerHTML={renderMessageText(msg.text)}
                                    />
                                </div>
                                <span className={`text-[9px] text-slate-400 block ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                    {msg.timestamp}
                                </span>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start items-start space-x-2.5">
                            <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0 animate-bounce">
                                <i className="fa-solid fa-robot text-xs animate-spin"></i>
                            </div>
                            <div className="bg-white border border-slate-150 px-4 py-2.5 rounded-2xl rounded-tl-none shadow-sm flex items-center space-x-2">
                                <div className="flex space-x-1">
                                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                </div>
                                <span className="text-xs text-slate-400 font-medium">학교 지식을 분석하는 중...</span>
                            </div>
                        </div>
                    )}
                    <div ref={chatEndRef} />
                </div>

                <div className="px-3 py-2 border-t border-slate-100 bg-slate-50 flex items-center space-x-2 overflow-x-auto whitespace-nowrap flex-shrink-0">
                    <span className="text-[10px] font-bold text-slate-400 flex-shrink-0">💡 퀵 조회:</span>
                    <div className="flex space-x-1.5">
                        {presetQuestions.map((chip, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleSendMessage(chip.q)}
                                disabled={isLoading || isGeneratingPresets}
                                className="bg-white border border-slate-200 hover:border-indigo-400 text-slate-600 hover:text-indigo-600 text-xs px-2.5 py-1 rounded-full transition-all shadow-sm font-medium">
                                {chip.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="p-3 bg-white border-t border-slate-200 flex-shrink-0">
                    <div className="flex items-center space-x-2 max-w-5xl mx-auto">
                        <input
                            type="text"
                            placeholder={documents.length === 0 ? "문서 등록 후 질문할 수 있습니다." : "전결, 담당자, 시간표 등 궁금한 점을 적어보세요..."}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
                                    handleSendMessage();
                                }
                            }}
                            disabled={isLoading || isGeneratingPresets}
                            className="flex-1 border border-slate-200 focus:border-indigo-500 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-slate-50 focus:bg-white transition-all shadow-inner"
                        />
                        <button
                            onClick={() => handleSendMessage()}
                            disabled={isLoading || isGeneratingPresets || !inputValue.trim()}
                            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                                !inputValue.trim() || isLoading || isGeneratingPresets
                                    ? 'bg-slate-100 text-slate-300 cursor-not-allowed' 
                                    : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow'
                            }`}>
                            <i className="fa-solid fa-paper-plane text-xs"></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* PWA 설치 가이드 모달 */}
            {showInstallGuide && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
                    <div className="bg-white w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl animate-scale-up">
                        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-4 text-white flex justify-between items-center">
                            <h3 className="font-bold text-sm flex items-center space-x-1.5">
                                <i className="fa-solid fa-mobile-screen"></i>
                                <span>스마트폰 홈 화면에 설치하기</span>
                            </h3>
                            <button onClick={() => setShowInstallGuide(false)} className="text-white/80 hover:text-white">
                                <i className="fa-solid fa-xmark text-lg"></i>
                            </button>
                        </div>
                        <div className="p-5 space-y-4">
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                                    <div className="text-xs">
                                        <p className="font-bold text-slate-700">아이폰 (Safari 사파리)</p>
                                        <p className="text-slate-500 mt-1">하단의 <span className="text-indigo-600 font-semibold"><i className="fa-solid fa-arrow-up-from-bracket"></i> [공유 버튼]</span>을 누른 뒤, 스크롤을 내려 <span className="font-semibold text-slate-700">'홈 화면에 추가'</span>를 탭합니다.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                                    <div className="text-xs">
                                        <p className="font-bold text-slate-700">안드로이드 (Chrome 크롬 / 삼성인터넷)</p>
                                        <p className="text-slate-500 mt-1">우측 상단 혹은 하단의 <span className="text-indigo-600 font-semibold"><i className="fa-solid fa-ellipsis-vertical"></i> [메뉴]</span>를 누르고 <span className="font-semibold text-slate-700">'앱 설치'</span> 또는 <span className="font-semibold text-slate-700">'홈 화면에 추가'</span>를 선택합니다.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center space-y-1">
                                <p className="text-[10px] text-slate-400 font-medium">설치 후 실행하면 상하단 주소창이 제거되어 더욱 널찍하고 앱과 같은 화면으로 서비스할 수 있습니다!</p>
                            </div>
                            <button 
                                onClick={() => setShowInstallGuide(false)}
                                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2.5 rounded-xl text-xs transition-colors">
                                확인했습니다
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* API 설정 모달 */}
            {showSettings && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
                    <div className="bg-white w-full max-w-md rounded-2xl overflow-hidden shadow-2xl animate-scale-up">
                        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-4 text-white flex justify-between items-center">
                            <h3 className="font-bold text-sm flex items-center space-x-1.5">
                                <i className="fa-solid fa-gear"></i>
                                <span>스쿨봇 AI 설정</span>
                            </h3>
                            <button onClick={() => setShowSettings(false)} className="text-white/80 hover:text-white">
                                <i className="fa-solid fa-xmark text-lg"></i>
                            </button>
                        </div>
                        <div className="p-5 space-y-4">
                            <div className="space-y-1">
                                <label className="text-[11px] font-bold text-slate-500 block">Gemini API Key</label>
                                <div className="relative">
                                    <input 
                                        type="password"
                                        placeholder="AI Studio에서 발급받은 API Key를 입력하세요"
                                        value={tempApiKey}
                                        onChange={(e) => setTempApiKey(e.target.value)}
                                        className="w-full text-xs px-3 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-slate-50 font-mono text-slate-800"
                                    />
                                </div>
                                <span className="text-[10px] text-slate-400 block leading-normal">
                                    🔑 API Key는 브라우저 내부(localStorage)에만 안전하게 저장되며, 서버로 절대 전송되지 않습니다.
                                </span>
                                <a 
                                    href="https://aistudio.google.com/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-[10px] text-indigo-600 hover:underline font-semibold inline-flex items-center space-x-0.5 mt-1">
                                    <span>무료 Gemini API Key 발급받기 (Google AI Studio)</span>
                                    <i className="fa-solid fa-arrow-up-right-from-square text-[8px]"></i>
                                </a>
                            </div>

                            <div className="space-y-1">
                                <label className="text-[11px] font-bold text-slate-500 block">AI 모델 선택</label>
                                <select 
                                    value={tempModel}
                                    onChange={(e) => setTempModel(e.target.value)}
                                    className="w-full text-xs px-3 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-slate-50 font-semibold text-slate-700">
                                    <option value="gemini-2.5-flash">Gemini 2.5 Flash (가장 빠름, 추천)</option>
                                    <option value="gemini-2.5-pro">Gemini 2.5 Pro (복잡한 추론에 최적화)</option>
                                    <option value="gemini-1.5-flash">Gemini 1.5 Flash (안정적인 서비스)</option>
                                </select>
                            </div>

                            <div className="flex space-x-2 pt-2">
                                <button 
                                    onClick={() => setShowSettings(false)}
                                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 rounded-xl text-xs transition-colors">
                                    취소
                                </button>
                                <button 
                                    onClick={() => {
                                        setApiKey(tempApiKey);
                                        setSelectedModel(tempModel);
                                        localStorage.setItem('school_chatbot_api_key', tempApiKey);
                                        localStorage.setItem('school_chatbot_model', tempModel);
                                        setShowSettings(false);
                                        setSuccessMsg("AI 설정이 안전하게 저장되었습니다!");
                                        setErrorMsg("");
                                        
                                        // 저장 후 만약 기존 문서가 있다면 자동으로 퀵메뉴 생성 트리거
                                        if (tempApiKey && documents.length > 0) {
                                            generateAiPresets(documents, tempApiKey, tempModel);
                                        }
                                    }}
                                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-xl text-xs transition-colors shadow">
                                    저장하기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
