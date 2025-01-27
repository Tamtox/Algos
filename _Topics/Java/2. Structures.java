package _Topics.Java;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class Structures {
  public static void examples() {
    // ArrayList ------------------------------------
    ArrayList<Integer> list1 = new ArrayList<>();
    list1.add(1);
    System.out.println(list1.get(0)); // 1
    ArrayList<Integer> list2 = new ArrayList<>();
    list2.add(2);
    ArrayList<Integer> list3 = new ArrayList<>();
    list3.addAll(list1);
    list3.addAll(list2);
    list3.remove(0);
    // Map ------------------------------------
    HashMap<Integer, Integer> dict = new HashMap<>();
    dict.put(1, 2);
    dict.put(2, 3);
    dict.put(3, 4);
  }
}
