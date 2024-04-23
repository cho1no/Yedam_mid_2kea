package co.yedam.asks.control;

import java.io.IOException;
import java.util.Date;
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

public class AddAsk implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String id = req.getParameter("id");
		String askContent = req.getParameter("askContent");
		String askCategory = req.getParameter("askCategory");
		String prodNo = req.getParameter("prodNo");
		
		AskVO avo = new AskVO();
		avo.setId(id);
		avo.setAskContent(askContent);
		avo.setAskDate(new Date());
		avo.setAskCategory(askCategory);
		avo.setProdNo(Integer.parseInt(prodNo));
		
		AskService avc = new AskServiceImpl();
		
		Map<String, Object> result = new HashMap<>();
		if(avc.addAsk(avo)) {
			result.put("retCode", "Success");
			result.put("retVal", avo);
		}else {
			result.put("retCode", "Fail");
			result.put("retVal", null);
		}
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(result);
		
		resp.getWriter().print(json);
	}

}
