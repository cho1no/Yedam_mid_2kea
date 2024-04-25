package co.yedam.cart.control;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Control;
import co.yedam.wish.service.WishService;
import co.yedam.wish.service.WishServiceImpl;
import co.yedam.wish.vo.WishVO;

public class WishList implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HttpSession session = req.getSession();
	    String id = (String)session.getAttribute("id");
	    if(!id.equals(null)) {
	    	req.getRequestDispatcher("2kea/wish.tiles").forward(req, resp);	
	    } else {
	    	req.getRequestDispatcher("2kea/signIn.tiles").forward(req, resp);
	    	
	    }
	}

}
