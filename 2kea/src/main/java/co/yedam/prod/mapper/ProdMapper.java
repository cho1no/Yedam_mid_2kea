package co.yedam.prod.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import co.yedam.prod.vo.ProdVO;

@Mapper
public interface ProdMapper {
	public List<ProdVO> selectProdList();
}
