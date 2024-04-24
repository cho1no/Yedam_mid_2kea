package co.yedam.asks.control;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.asks.service.AskService;
import co.yedam.asks.service.AskServiceImpl;
import co.yedam.asks.vo.AskVO;
import co.yedam.common.Control;

public class EditAsk implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String pno = req.getParameter("pno");
		String askNo = req.getParameter("askNo");
		String askContent = req.getParameter("askContent");
		
		
		AskVO avo = new AskVO();
		avo.setProdNo(Integer.parseInt(pno));
		avo.setAskNo(Integer.parseInt(askNo));
		avo.setAskContent(askContent);
		
		AskService svc = new AskServiceImpl();
		Map<String, Object> result = new HashMap<>();
		if(svc.editAsk(avo)) {
			result.put("retCode", "Success");
			result.put("retVal", avo);
		} else {
			result.put("retCode", "Fail");
			result.put("retVal", null);
		}
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(result);
		
		resp.getWriter().print(json);

	}
	
}
