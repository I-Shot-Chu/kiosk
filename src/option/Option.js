


export const ExtraShot = ({extramenu = {}, handleOptionSelect})=>{
    
    const option = extramenu.option || '';

    return(
        <div>
            <h3>샷 선택</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <div onClick={()=>handleOptionSelect('연하게', 0)} 
                style={{ border: extramenu.option === '연하게' ? '2px solid red' : '1px solid black', padding: 10, cursor: 'pointer' }}>
                <img src="연하게_이미지_경로" alt="연하게" style={{width:50}}/>
                <p>연하게</p>
                <p>+0원</p>
                </div>
                <div onClick={()=>handleOptionSelect('샷 추가', 500)} 
                style={{ border: extramenu.option === '샷 추가' ? '2px solid red' : '1px solid black', padding: 10, cursor: 'pointer' }}>
                <img src="샷_추가_이미지_경로" alt="샷추가" style={{width:50}}/>
                <p>샷 추가</p>
                <p>+500원</p>
                </div>
                <div onClick={()=>handleOptionSelect('2샷 추가', 1000)} 
                style={{ border: extramenu.option === '2샷 추가' ? '2px solid red' : '1px solid black', padding: 10, cursor: 'pointer' }}>
                <img src="2샷_추가_이미지_경로" alt="2샷추가" style={{width:50}}/>
                <p>2샷 추가</p>
                <p>+1,000원</p>
                </div>
            </div>
        </div>
    );
}


export const ExtraSugar = ({extramenu={}, handleOptionSelect})=>{
    const option = extramenu.option || '';
    
    return(
        <div>
            <h3>당도 선택</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <div onClick={()=>handleOptionSelect('설탕시럽 추가', 0)} 
                style={{ border: extramenu.option === '설탕시럽 추가' ? '2px solid red' : '1px solid black', padding: 10, cursor: 'pointer' }}>
                <img src="설탕시럽_추가_이미지_경로" alt="설탕시럽 추가" style={{width:50}}/>
                <p>설탕시럽 추가</p>
                <p>+0원</p>
                </div>
                <div onClick={()=>handleOptionSelect('덜 달게', 0)} 
                style={{ border: extramenu.option === '덜 달게' ? '2px solid red' : '1px solid black', padding: 10, cursor: 'pointer' }}>
                <img src="덜달게_추가_이미지_경로" alt="덜 달게" style={{width:50}}/>
                <p>덜 달게</p>
                <p>+0원</p>
                </div>
                <div onClick={()=>handleOptionSelect('스테비아 설탕 추가', 700)} 
                style={{ border: extramenu.option === '스테비아 설탕 추가' ? '2px solid red' : '1px solid black', padding: 10, cursor: 'pointer' }}>
                <img src="스테비아_추가_이미지_경로" alt="스테비아 추가" style={{width:50}}/>
                <p>스테비아 설탕 추가</p>
                <p>+700원</p>
                </div>
                <div onClick={()=>handleOptionSelect('바닐라 시럽 추가', 500)} 
                style={{ border: extramenu.option === '바닐라 시럽 추가' ? '2px solid red' : '1px solid black', padding: 10, cursor: 'pointer' }}>
                <img src="바닐라시럽_추가_이미지_경로" alt="바닐라 시럽 추가" style={{width:50}}/>
                <p>바닐라시럽 추가</p>
                <p>+500원</p>
                </div>
                <div onClick={()=>handleOptionSelect('헤이즐럿 시럽 추가', 500)} 
                style={{ border: extramenu.option === '헤이즐럿 시럽 추가' ? '2px solid red' : '1px solid black', padding: 10, cursor: 'pointer' }}>
                <img src="덜달게_추가_이미지_경로" alt="헤이즐럿 시럽 추가" style={{width:50}}/>
                <p>헤이즐럿 시럽 추가</p>
                <p>+500원</p>
                </div>
            </div>
        </div>
    );
}


export const ExtraIce = ({extramenu={}, handleOptionSelect})=>{
    
    const option = extramenu.option || '';

    return(
        <div>
            <h3>얼음 양(선택, 단일선택)</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <div onClick={()=>handleOptionSelect('얼음 없이', 0)} 
                style={{ border: extramenu.option === '얼음 없이' ? '2px solid red' : '1px solid black', padding: 10, cursor: 'pointer' }}>
                <img src="연하게_이미지_경로" alt="얼음" style={{width:50}}/>
                <p>얼음 없이</p>
                <p>+0원</p>
                </div>
                <div onClick={()=>handleOptionSelect('얼음 반만', 0)} 
                style={{ border: extramenu.option === '얼음 반만' ? '2px solid red' : '1px solid black', padding: 10, cursor: 'pointer' }}>
                <img src="샷_추가_이미지_경로" alt="얼음" style={{width:50}}/>
                <p>얼음 반만</p>
                <p>+0원</p>
                </div>
                <div onClick={()=>handleOptionSelect('얼음 많이', 0)} 
                style={{ border: extramenu.option === '얼음 많이' ? '2px solid red' : '1px solid black', padding: 10, cursor: 'pointer' }}>
                <img src="2샷_추가_이미지_경로" alt="얼음" style={{width:50}}/>
                <p>얼음 많이</p>
                <p>+0원</p>
                </div>
            </div>
        </div>
    );
}


export const ExtraTopping = ({extramenu = {}, handleOptionSelect})=>{
    
    const option = extramenu.option || '';

    return(
        <div>
            <h3>토핑 선택</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <div onClick={()=>handleOptionSelect('휘핑크림', 500)} 
                style={{ border: extramenu.option === '휘핑크림' ? '2px solid red' : '1px solid black', padding: 10, cursor: 'pointer' }}>
                <img src="연하게_이미지_경로" alt="휘핑크림" style={{width:50}}/>
                <p>휘핑크림</p>
                <p>+500원</p>
                </div>
                <div onClick={()=>handleOptionSelect('초코젤라또', 700)} 
                style={{ border: extramenu.option === '초코젤라또' ? '2px solid red' : '1px solid black', padding: 10, cursor: 'pointer' }}>
                <img src="샷_추가_이미지_경로" alt="초코젤라또" style={{width:50}}/>
                <p>초코젤라또</p>
                <p>+700원</p>
                </div>
                <div onClick={()=>handleOptionSelect('타피오카펄', 700)} 
                style={{ border: extramenu.option === '타피오카펄' ? '2px solid red' : '1px solid black', padding: 10, cursor: 'pointer' }}>
                <img src="2샷_추가_이미지_경로" alt="타피오카펄" style={{width:50}}/>
                <p>타피오카펄</p>
                <p>+700원</p>
                </div>
            </div>
        </div>
    );
}