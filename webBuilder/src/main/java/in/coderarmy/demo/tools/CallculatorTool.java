package in.coderarmy.demo.tools;

import org.springframework.ai.tool.annotation.Tool;
import org.springframework.ai.tool.annotation.ToolParam;
import org.springframework.stereotype.Component;

@Component
public class CallculatorTool {


    @Tool(description = """
            Performs arithmetic calculations.
            Supported operations: add, subtract, multiply, divide,power.
            """)
    public double Calculate(

            @ToolParam(description = " add , subtract , devide , power , multiply")
            String operation ,
            @ToolParam(description = "first number")
            double a,
            @ToolParam(description = "second number")
            double b
    ){
        System.out.println("called");
        if (operation.equals("add")){
            return a + b;
        } else if (operation.equals("multiply")) {
            return a*b;

        } else if (operation.equals("devide")) {
            if (b==0){
                throw new IllegalArgumentException("cannot devide by 0");
            }
            return a/b;

        } else if (operation.equals("power")) {

            return Math.pow(a, b);
        }else{
            return 0;
        }

    }



}
