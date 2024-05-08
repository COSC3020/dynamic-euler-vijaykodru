[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/3aNDMX3O)
# Dynamic Programming Euler's Number

The mathematical constant $e$ (Euler's number) is defined as follows:

$$ e = \sum^{\infty}_{i=0} \frac{1}{i!} = \frac{1}{1} + \frac{1}{1} +
\frac{1}{1\cdot 2} + \frac{1}{1\cdot 2\cdot 3} + \frac{1}{1\cdot 2\cdot 3\cdot
4} + \ldots$$

I've provided an implementation of a function to approximate $e$ up to a number
of $n$ terms in `code.js` for you. However, it does repeated work -- identify
where the repeated work occurs and avoid it through bottom-up dynamic
programming (not memoization). Change the implementation accordingly.

Test your new functions; I've provided some basic testing code in `code.test.js`
but you need to go beyond that.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

The worst case time complexity for the code implemented is $\Theta(n)$. This is because the for loop inside the function which iterates over n elements to calculate the euler's number. Other factors such as the calculation inside the loop only take constant which can be neglected for asymptotic analysis.


references:

dynamic-euler-IshitaPatel18, looked at how the test case is done.

https://www.simplilearn.com/tutorials/data-structure-tutorial/what-is-dynamic-programming#:~:text=2.-,Bottom%2DUp%20Approach,or%20overhead%20of%20recursive%20procedures.

the above website helped be the difference between bottom up and top to bottom approach of coding which became pretty simple after understanding. 