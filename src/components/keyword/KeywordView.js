import React from 'react';
import styled from 'styled-components';

const KeywordBlock = styled.div`
    max-width: 1920px;
    min-width: 320px;
    margin: 0 auto;

    .content {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .keywordArea {
        background: #e9e9e9;
        border: 1px solid;
        padding: 5px 10px;
        margin: 1rem;
        min-width: 200px;
        min-height: 175px;
    }

    .keywordArea .title {
        text-align: center;
        font-weight: bold;
        margin-bottom: 1rem;
    }
`;


const KeywordView = (props) => {
    const {
        
    } = props;

    return (
        <KeywordBlock>
            <div className='content'>
                
                <div className="keywordArea">
                    <div className="title">금융</div>
                    <div>#비트코인</div>
                    <div>#알트코인</div>
                    <div>#주식</div>
                    <div>#카카오뱅크</div>
                    <div>#미국환율</div>
                </div>

                <div className="keywordArea">
                    <div className="title">스포츠</div>
                    <div>#손흥민</div>
                    <div>#토트넘</div>
                    <div>#월드컵</div>
                    <div>#박지성</div>
                    <div>#리버풀</div>
                </div>

                <div className="keywordArea">
                    <div className="title">주식</div>
                    <div>#삼성전자</div>
                    <div>#애플</div>
                    <div>#아마존</div>
                    <div>#카카오</div>
                    <div>#네이버</div>
                </div>

                <div className="keywordArea">
                    <div className="title">기술</div>
                    <div>#아이폰</div>
                    <div>#맥북16인치</div>
                    <div>#아이패드프로</div>
                    <div>#WWDC</div>
                    <div>#M2</div>
                    <div>#갤럭시</div>
                </div>

                <div className="keywordArea">
                    <div className="title">생활</div>
                    <div>#천연비누</div>
                    <div>#팩</div>
                    <div>#책상</div>
                    <div>#침대</div>
                    <div>#음식레시피</div>
                </div>
                

            </div>
        </KeywordBlock>
    );
}

export default KeywordView;