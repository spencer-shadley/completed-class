### Pre-class Drill

* Let students know that it's time for the preclass drill of the day. Remind them that interviewing is a skill that is in some ways separate from practical coding, and that they need to work hard to hone this skillset during this course. The class is designed to make them great developers, and these pre-class questions are designed to make them awesome interviewers.

* Encourage students to begin by pseudo-coding. Remind them that many companies are judging more on problem solving skills than coding chops, so having strong pseudo-coding skills to fall back on may just land them their dream job one day. You should encourage some white boarding from students (when relevant) and explain why it's beneficial for them to do it in the classroom rather than wait for their first time to be during interviews, but move on if there are no volunteers. Discourage heavy pressure for students.

* 20 min before class starts write the following problem on the board or Slack it out:

```
What is the difference between == and === ? What is an example of a problem that == might introduce? 
```

* Remind students that there are multiple kinds of interview questions. We've largely practiced coding problems, but they should expect to encounter discussion problems as well.

* Let students know that Google is not allowed for this problem. They should play around with code in an editor to test theories. This will help them retain what they learn. 

* After 15 minutes take 5 minutes to go over the solution. You should start recording when going over the answer and Slack out the answer at the end of office hours before class starts.

* Ask students if they found a solution and go over their solution (or the ones below if no student-solution is provided). 

* Be sure to praise students who provide a solution even if it isn't fully correct. Discuss its merits and potential pitfalls.

* Ensure the following points are hit:

  * Double equals coerces one type to another to try to find equality. Triple equals does not coerce values and is looking for strict equality (equality of type and value).

  * Triple equals is generally considered safer and many offices won't allow the use of double equals. 

Some example problem code: 

```
[] == 0 //true
```

This behavior is unexpected and unexpected behavior leads to bugs. 

Another example, using double equals to check for expected input, you may find that `'2' == 2` but `'2' + 2` will not equal `2 + 2` so you may run into unexpected values later in your code.  
