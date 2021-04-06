学习笔记
## 02-01
乔姆斯基谱系：是计算机科学中刻画形式文法表达能力的一个分类谱系，是由诺姆·乔姆斯基于 1956 年提出的。它包括四个层次：
    0- 型文法（无限制文法或短语结构文法）包括所有的文法。
    1- 型文法（上下文相关文法）生成上下文相关语言。
    2- 型文法（上下文无关文法）生成上下文无关语言。
    3- 型文法（正规文法）生成正则语言。
https://zh.wikipedia.org/wiki/乔姆斯基谱系

## 02-02
产生式（BNF）： 在计算机中指 Tiger 编译器将源程序经过词法分析（Lexical Analysis）和语法分析（Syntax Analysis）后得到的一系列符合文法规则（Backus-Naur Form，BNF）的语句
巴科斯诺尔范式：即巴科斯范式（英语：Backus Normal Form，缩写为 BNF）是一种用于表示上下文无关文法的语言，上下文无关文法描述了一类形式语言。它是由约翰·巴科斯（John Backus）和彼得·诺尔（Peter Naur）首先引入的用来描述计算机语言语法的符号集。
终结符： 最终在代码中出现的字符（ https://zh.wikipedia.org/wiki/終結符與非終結符)

• 用尖括号括起来的名称来表示语法结构名
• 语法结构分成基础结构和需要用其他语法结构定义的复合结构
    • 基础结构称终结符
    • 复合结构称非终结符
• 引号和中间的字符表示终结符
• 可以有括号
• * 表示重复多次
• | 表示或
• + 表示至少一次
四则运算：
    1+2*3
终结符：
    Number
    + - * / （）
非终结符：
    * MultiplicativeExpression，简称 ME
    * AddtiveExpression，简称 AE
    * ParenthesisExpression, 简称 PE
    * MultiplicativeOperator，简称 MO
    * AdditiveOperator, 简称 AO
BNF：
    * <MO>::= "*" | "/"
    * <AO>::= "+" | "-"
    * <ME>:: = <Number> | <ME> <MO> <ME>
    * <AE>:: = <ME> | <AE> <AO> <ME>
    * <PE>:: = <AE> | "(" <PE> ")" | <PE><MO><PE>|<PE><AO><PE>
作业要求：编写带括号的四则运算产生式

作业：
02-02：
四则运算：
（1+2）*3 
BNF: 
<PE>:: = <AE> | "(" <PE> ")" | <PE><MO><PE>|<PE><AO><PE>|<ME>*<Number>

## 02-03
通过产生式理解乔姆斯基谱系
• 0型 无限制文法
• ?::=?
• 1型 上下文相关文法
• ?<A>?::=?<B>? • 2型 上下文无关文法
• <A>::=?
• 3型 正则文法
• <A>::=<A>?
• <A>::=?<A> ×

## 02-04
现代语言分类
语言形式——用途
    数据描述语言（html，css，xaml，sql等）
    编程语言（c，c++，java，c#，javascript……）
语言形式——表达方式
    声明式语言（json,html,xaml,sql,css……）
    命令型语言（c，c++,java,c#,javascript...)
作业：
尽可能寻找你知道的计算机语言，尝试把它们分类（作业的要义：有什么语言，有哪些分类方式，怎么归类）


## 02-05
编程语言的性质
图灵完备性
    命令式——图灵机
    • goto
    • if和while
    声明式——lambda
    • 递归
动态与静态
• 动态： • 在用户的设备/在线服务器上
    • 产品实际运行时
    • Runtime
• 静态： 
    • 在程序员的设备上
    • 产品开发时
    • Compiletime
类型系统
• 动态类型系统与静态类型系统
• 强类型与弱类型
    • String + Number
    • String == Boolean
• 复合类型
    • 结构体
    • 函数签名
• 子类型
• 泛型
    • 逆变 /协变

## 02-06
一般命令式编程语言的设计方式
Atom : Identifier , Literal
Expression : Atom , Perator , Punctuator ,
Statement : Expression , Keyword , Punctuator
Structure : Function , Class , Process , Namespace ...
Program : Program , Module , Package , Library

## 02-07
JS类型|Number
IEEE 754 Double Float
    • Sign（1） 
    • Exponent（11） 
    • Fraction（52）

## 02-08
JS类型|Sttring
ASCLL
unicode
gb ...
"abc"
'abc'
`abc${b}`

## 02-09
JS类型|其它类型
Boolean
null & undefined , void 0;


## 02-10
JS类型|Object & Symbol
Object
Object - Class
Object - Prototype
练习
狗 咬 人 
“咬”这个行为该如何使用对象抽象？
clas Animal{
    bite(){
        console.log('bite')
    }
}
class Dog extends Animal{
    bite(){
        console.log('bite Humen')
    }
}

## 02-11
JS类型|Object
Object - Property
set get values ...