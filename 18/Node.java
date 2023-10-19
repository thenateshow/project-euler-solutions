public class Node{
	Node left;
	Node right;
	int val;
	public Node(Node l, Node r, int v){
		left = l;
		right = r;
		val = v;
	}
	public Node(int v){
		left = null;
		right = null;
		val = v; 
	}
	public Node getLeft(){
		return left;
	}
	public Node getRight(){
		return right;
	}
	public int getVal(){
		return val;
	}
	public void setLeft(Node l){
		left = l;
	}
	public void setRight(Node r){
		right = r;
	}
	public void setVal(int v){
		val = v;
	}
}