//!
//!  x The operand of a delete operator must be a property reference.
//!   ,----
//! 4 | delete await 42;
//!   :        ^^^^^^^^
//!   `----
//!
//!  x The operand of a delete operator must be a property reference.
//!   ,----
//! 8 | delete await 42;
//!   :        ^^^^^^^^
//!   `----
//!
//!
//!Caused by:
//!    0: failed to process input file
//!    1: error was recoverable, but proceeding would result in wrong codegen
//!    2: Syntax Error