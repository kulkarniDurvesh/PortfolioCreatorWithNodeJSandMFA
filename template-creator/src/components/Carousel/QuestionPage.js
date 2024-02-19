import React, { useEffect, useState } from 'react'
import "../../css/QuestionPage.css"
import Questionnaire from '../BaseTemplate/Questionnaire';
import { useNavigate } from 'react-router-dom';
import { $ } from 'react-jquery-plugin';
import Template from '../BaseTemplate/Template';
const QuestionPage = ()=>{
    const [QuestionNo,setQuestionNo] = useState("");
    const [Question,setQuestion] = useState("");
    const [Count,setCount]=useState(1);
    const navigate = useNavigate();
    const [Answer,setAnswer] = useState("");
    const [jsonArray,setJsonArray]=useState([]);
  
    const saveChanges=()=>{
        let jsonObj={};
        jsonObj[QuestionNo]=Answer;
        jsonArray.push(jsonObj);
        if(Count===4){
            $('#exampleModalCenter').hide();
            $('.modal-backdrop').removeClass('modal-backdrop');
            navigate('/Template',{state:{QueAns:jsonArray}});

        }
        setAnswer("");
        setCount(Count+1);
        setQuestionNo("Q."+(Count+1));
    }

    useEffect(()=>{
        setQuestion(Questionnaire[QuestionNo]);

    },[QuestionNo]);

    const loadFirstQuestion=()=>{
        setQuestionNo("Q."+Count);
        setQuestion(Questionnaire[QuestionNo])
    }

    const handleAnsChange=(event)=>{
        setAnswer(event.target.value);
    }

    return (
       
        <div>
            
                <button type="button" className="btn btn-primary center" onClick={loadFirstQuestion} data-toggle="modal" data-target="#exampleModalCenter">
                Start Building...
                </button>
            
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">{QuestionNo}<span>{Question}</span></h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <textarea id='answerbox' onChange={handleAnsChange} value={Answer} style={{width:"100%",height:"100%"}}></textarea>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={saveChanges}>Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>
           
          
        </div>
    )
}
export default QuestionPage