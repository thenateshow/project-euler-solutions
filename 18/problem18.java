import java.util.List;
import java.util.ArrayList;

public class problem18{
	static int largest = 0;
	public static void main(String[] args){
		List<Node> pyramid = new ArrayList<Node>();
		String s = "75 95 64 17 47 82 18 35 87 10 20 04 82 47 65 19 01 23 75 03 34 88 02 77 73 07 63 67 99 65 04 28 06 16 70 92 41 41 26 56 83 40 80 70 33 41 48 72 33 47 32 37 16 94 29 53 71 44 65 25 43 91 52 97 51 14 70 11 33 28 77 73 17 78 39 68 17 57 91 71 52 38 17 14 91 43 58 50 27 29 48 63 66 04 68 89 53 67 30 73 16 69 87 40 31 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23";
		pyramid.add(null);
		String[] spl = s.split(" ", -1);
		int inc = 1;
		int row = 1;
		for(int i = 0; i < spl.length; i++){
			Node temp = new Node(Integer.parseInt(spl[i]));
			pyramid.add(temp);
		}
		for(int i = 1; i < pyramid.size(); i++){
			if(row == 0){
				inc++;
				row = inc;
			}
			if(pyramid.size() < i + inc + 1){
				break;
			}
			pyramid.get(i).setLeft(pyramid.get(i+inc));
			pyramid.get(i).setRight(pyramid.get(i+inc+1));
			row--;
		}
		traverse(0, pyramid.get(1));
		System.out.println(largest);
	}
	public static void traverse(int i, Node n){
		i += n.getVal();
		if(n.getLeft() == null){
			if(i > largest){
				largest = i;
			}
			return;
		}
		traverse(i, n.getLeft());
		traverse(i, n.getRight());
	}
}