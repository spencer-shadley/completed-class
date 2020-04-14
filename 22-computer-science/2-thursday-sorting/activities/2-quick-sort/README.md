# Quick Sort

## Instructions

Implement Quick Sort, starting with the code in `unsolved/algorithmStarter.js`

## About

- Insertion sort is intuitive. It's the most "natural" way for humans to sort things.

- This is a major advantage from the standpoint of implementation. Since insertion sort "makes sense", it's easy to write it correctly.

- While simple, insertion sort is [intolerably slow for average arrays](http://delab.csd.auth.gr/courses/c_ds/insertion_bubblesort_analysis.pdf), with a running time of O(n<sup>2</sup>).

  - If we double the number of items we're sorting, it will take _four_ times as long to finish. If we triple the amount of items, it will take _nine_ times as long. If we want to sort five times as many items, it's _twenty five_ times as long. etc...

- In other words, the amount of "work"—or machine instructions—that insertion sort needs to do to sort an array increases too quickly for it to work fast enough in practice.

- If we're clever, we can write code that _minimizes_ the amount of work the computer needs to do to sort the array.

- This requires us to be _clever_. Efficient sorting methods aren't as intuitive as methods like insertion or selection sort.

- We can trade-off code complexity for performant code

- One such clever method is called _quick-sort_, so named because it's...well, really quick.

- quick-sort was developed [specifically because insertion sort is sometimes too slow](http://anothercasualcoder.blogspot.com/2015/03/my-quickshort-interview-with-sir-tony.html).

- The high-level sketch of quick-sort looks something like this:

  - Select an element from the array. This element is called the **pivot**.

  - Choosing a pivot is a somewhat complicated detail. If someone asks, it's fine to explain that we can choose one at random.

  - Next, begin sorting by iterating through the array. Rearrange the array's elements such that:

  - Every element _less_ than the pivot comes before it; and
  - Every element _greater_ than the pivot comes after it.
  - This puts the pivot in the right place—i.e., this is where the pivot will appear when the array is finally sorted.

  - This process is called _partitioning_.

  - Taken independently, the elements to the left of the pivot comprise an array. The same is true for the elements to the right.

  - Repeat the above steps in each of the sub-arrays generated from partitioning.

  - Since these sub-arrays get smaller with each iteration, we'll eventually try to sort arrays with one element.
  - Once we get here, we're done—the array is sorted.

## Resources

- [Visual Go](https://visualgo.net/en/sorting) for an animation

- [YouTube Explanation](https://www.youtube.com/watch?v=Hoixgm4-P4M)
