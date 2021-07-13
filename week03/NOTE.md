学习笔记
## 03-01 表达式
* 运算符
    - 四则运算的优先级:从上之下
    - 运算符的优先级：Member (a.b , a[b] , super.b , super['b'] , new.target , new foo() , new foo )
    - call expressions: foo()...
    - left handside & right handside
    - 单目运算符： delete , void foo() , typeof a , +a , -a , ~a , !a , await a,
    - ** ,右结合
    - *, / , % , + , - , << , >> , >>> ,< , > , <= , >= , instanceof , in
    - == , != , === , !== , & , ^ , |
    - && , || , ?:

## 03-02 表达式
* 运算符
    - 类型相加，类型转换
    - 拆箱转换（Unboxing): ToPemitive , toString vs valueOf , Symbol.toPrimitive,
    - 装箱转换（Boxing):
* 作业 number to string
new String(3);

## 03-03 简单语句
 - ExpressionStatement：表达式语句
 - EmptyStatement：空语句
 - DebuggerStatement： debugger语句
 - ThrowStatement：抛出异常
 - ContinueStatement：结束当次循环
 - BreakStatement：结束循环
 - ReturnStatement：返回

## 03-04 组合语句
 - BlockStatement：{}
 - IfStatement: if
 - SwitchStatement: swetch
 - IterationStatement: 循环
 - WithStatement：with
 - LabelledStatement: label
 - TryStatement: try

## 03-05 声明
 - FunctionDeclaration
 - GeneratorDeclaration
 - AsyncFunctionDeclaration
 - AsyncGeneratorDeclaration
 - VariableStatement：变量声明
 - ClassDeclaration
 - LexicalDeclaration
- 声明 : function, function * , async function , async function * , var, class, const, let
- 预处理（pre-process）
- 作用域

## 03-06 结构化程序设计
- 宏任务
- 微任务（Promise）
- 函数调用
- 语句/声明
- 直接量/变量/this……
