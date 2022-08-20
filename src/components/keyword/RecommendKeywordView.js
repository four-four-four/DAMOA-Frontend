import React from 'react';
import styled from 'styled-components';

const RecommendKeywordBlock = styled.div`
    max-width: 1920px;
    min-width: 320px;
    margin: 0 auto;

    .content {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .box {
        min-width: 1215px;
        min-height: 125px;
        padding: 5px 10px;
        border: 1px solid;
    }

    .box .title {
        font-weight: bold;
        margin-bottom: 1rem;
    }
`;


const RecommendKeywordView = (props) => {
    const {
        
    } = props;

    return (
        <RecommendKeywordBlock>
            <div className='content'>
                
                <div className='box'>
                    <div className='title'>추천 키워드</div>
                    <div>
                        #비트코인 #알트코인 #주식#카오뱅크 # 미국환율
                    </div>
                </div>
                

            </div>
        </RecommendKeywordBlock>
    );
}

export default RecommendKeywordView;