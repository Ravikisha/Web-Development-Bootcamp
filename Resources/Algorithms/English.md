# Algorithms
## Table of Contents

## Types:
- [Introduction](#introduction)
- [Naive Implementations](#naive-implementations)
- [Searching Algorithms](#searching-algorithms)
- [Sorting Algorithms](#sorting-algorithms)

## Time Complexities:
- [Big-O Notation](#big-o-notation)
- [Constant Time](#constant-time)
- [Logarithmic Time](#logarithmic-time)
- [Linear Time](#linear-time)
- [Quadratic Time](#quadratic-time)
- [Exponential Time](#exponential-time)
- [Factorial Time](#factorial-time)

## Algorithms:
- [Array Indexing](#array-indexing)
- [Bitwise Operations](#bitwise-operations)
- [Binary Search](#binary-search)
- [Breadth-First Search](#breadth-first-search)
- [Depth-First Search](#depth-first-search)
- [Bubble Sort](#bubble-sort)
- [Merge Sort](#merge-sort)
- [Quick Sort](#quick-sort)
- [Heap Sort](#heap-sort)
- [Insertion Sort](#insertion-sort)
- [Tree Sort](#tree-sort)
- [Brute Force](#brute-force)
- [Djikstra's Algorithm](#dijkstras-algorithm)
- [Prim's Algorithm](#prims-algorithm)
- [Kruskal's Algorithm](#kruskals-algorithm)

---

# Types

## Introduction

Algorithms are specific instructions for performing computations in order to solve a problem.  
Programmers seek efficiency and aim to get the desired results within the least amount of [runtime](#time-complexities).

## Naive-Implementations

The simplest implementation of an algorithm which is functional but inefficient.

## Searching-Algorithms

An algorithm that finds specified elements within a data structure.

**Example:**
```
const arr = [1,2,3,4,5];

function searchArr(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
}
```

Above function searches through all the elements of an array, returning the index of desired element when found.

## Sorting-Algorithms

An algorithm that finds rearranges unsorted elements comparatively.

**Example:**
```
const arr = [1,2,3,4,5];

function searchArr(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
}
```

Above function searches through all the elements of an array, returning the index of desired element when found.

---

# Time-Complexities

## Big-O-Notation

Big-O Notation is used to calculate the performance runtime of utilized algorithms.  Elements that alter output 
are number of operations, data structure types and sizes, algorithmic dependencies on input elements, the usage of 
iterative versus recursive logic, & proper coding practices.  The faster the time complexity, the more efficient. 
This can help programs scale in size, while retaining desired performance.  These are not language dependant.

Big-O Notation summarizes the time complexities of various algorithms.  The lower the complexity the better 
the performance, which increases efficiency.  

> * **Fastest:** [Constant Time O(1)](#constant-time)
> * **Faster:** [Logarithmic Time O(log n)](#logarithmic-time)
> * **Typical:** [Linear Time O(n)](#linear-time)
> * **Slow:** [Linear-Logarithmic Time O(n log n)](#linear-logarithmic)
> * **Undesired:** [Quadratic Time O(n^2)](#quadratic-time), [Exponential Time O(2^n)](#exponential-time), [Factorial Time O(n!)](#factorial-time)

## Constant-Time
### Notation: O(1)

The runtime never changes, regardless of input size.

```
function constantTime(n) {
    return n + 1;
}
```

**Common Uses:** [Array Indexing](#array-indexing), [Bitwise Operations](#bitwise-operations)

## Logarithmic-Time
### Notation: O(log n)

Runtime increases gradually with more input.

```
function logarithmicTime(n) {
    for (let i = 0; i < n, i * 2) {
        n++;
    }
    return n;
}
```

**Common Uses:** [Binary Search](#binary-search), [Heap Sort](#heap-sort), [Merge Sort](#merge-sort)

## Linear-Time
### Notation: O(n)

Runtime proportional to input size.

```
(code example)

```

**Common Uses:** (link algorithms)

## Linear-Logarithmic
### Notation: O(n log n)

Linear and 

```
(code example)

```

**Common Uses:** (link algorithms)

## Quadratic-Time
### Notation: O(n^2)

The runtime is twice the input size, typically due to excess operations.

```
function quadraticTime(n) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            n += 1;
        }
    }
    return n;
}
```

**Common Uses:** (link algorithms)

## Exponential-Time
### Notation: O(2^n)

With each additional element, the time complexity doubles.

```
(code example)

```

**Common Uses:** (link algorithms)

## Factorial-Time
### Notation: O(n!)

(blurb)

```
(code example)

```

**Common Uses:** (link algorithms)

---

# Algorithms

## Array-Indexing

Finds the first index of given element within an array.

* **Best Case Time Complexity:** O(n)
* **Keywords:** index of, find index of an element in an array, check if an array contains a specific element

```
const arr = ["A","B","C"];
let index = arr.indexOf("C");
```

## Bitwise-Operations

Used in performing fast yet simple operations on bits, the smallest units of computation data.

* **Best Case Time Complexity:** O(1)
* **Keywords:** &, |, ^, ~, <<, >>, >>>

```
5 ^ 1
```

## Binary-Search

A [searching algorithm](#searching-algorithms) which divides input in halves until returning desired result.

* **Best Case Time Complexity:** O(1)
* **Keywords:** sorted array, split, return index of specific element

```
function binarySearch(sortedArray, element) {
    let front = 0;
    let end = sortedArray.length - 1;

    while (front <= end) {
        let middle = Math.floor((front + end) / 2);

        if (sortedArray[middle] === element) {
            return middle;
        } else if (sortedArray[middle] < element) {
            front = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return -1;
} 
```

## Breadth-First-Search

(blurb)

* **Best Case Time Complexity:** O(2^n)
* **Keywords:** bfs, (keywords)

## Depth-First-Search

(blurb)

* **Best Case Time Complexity:** O(2^n)
* **Keywords:** dfs, (keywords)

## Bubble-Sort

A [sorting algorithm](#sorting-algorithms) that compares two adjacent elements and swaps them if they're not in intended incremental/decremental order.

* **Best Case Time Complexity:** O(1)
* **Keywords:** unsorted array, incremental order, decremental order, alphabetical order, sinking sort

```
let arr = [754, 34, 2, 15, 22];

function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let placeholder = arr[j];
                arr[j] = arr[j+1];
                arr[j + 1] = placeholder;
            }
        }
    }

    return arr;
}
```

## Merge-Sort

(blurb) 

* **Best Case Time Complexity:** O(n)
* **Keywords:** (keywords)

## Quick-Sort

(blurb) 

* **Best Case Time Complexity:** O(n)
* **Keywords:** pivoting, (keywords)

## Heap-Sort

(blurb) 

* **Best Case Time Complexity:** O(1)
* **Keywords:** (keywords)

## Selection-Sort

(blurb)

* **Best Case Time Complexity:** O(n)
* **Keywords:** (keywords)

## Insertion-Sort

(blurb)

* **Best Case Time Complexity:** O(n)
* **Keywords:** (keywords)

## Tree-Sort

(blurb)

* **Best Case Time Complexity:** O(n)
* **Keywords:** (keywords)

## Greedy Algorithm

An inefficient algorithm that calculates close solutions over least expensive solutions.

* **Best Case Time Complexity:** O(mn)
* **Keywords:** fractional knapsack, step-by-step procedure, whatever is obvious regardless of cost

## Brute-Force

An inefficient algorithm that exhausts all plausible actions in order to return results.

* **Best Case Time Complexity:** O(mn)
* **Keywords:** password cracking, cipher, step-by-step procedure, accomplish regardless of means

## Dijkstras-Algorithm

An algorithm applied to graphs with vertices and edges in which the most efficient route is calculated from a starting point to a finishing point.

* **Best Case Time Complexity:** O(V^2)
* **Keywords:** traveling salesman, shortest path, undirected/directed/weighted-edges graph, cheapest cost, minimum-spanning tree

## Prims-Algorithm

Builds a minimum spanning tree from a weighted undirected graph, choosing a starting vertex at random.

* **Best Case Time Complexity:** O(V 2)
* **Keywords:** greedy, (keywords)

## Kruskals-Algorithm

Sorts edges on a graph from lowest to highest and then adds them one after the other to a spanning tree.

* **Best Case Time Complexity:** O(E log V)
* **Keywords:** greedy, minimum spanning tree